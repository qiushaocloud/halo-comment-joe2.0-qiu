<template>
  <section
    :id="respondId"
    class="comment-editor"
    role="form"
    ref="editor"
    v-if="isCurrReply"
  >
    <h3 id="reply-title" class="comment-reply-title" v-if="isReply">
      <small>
        <a
          href="javascript:;"
          class="cancel-comment-reply-link"
          @click="cancelReply"
          >取消回复</a
        >
      </small>
    </h3>
    <form class="comment-form">
      <div class="comment-textarea" v-if="!previewMode">
        <textarea
          required="required"
          aria-required="true"
          tabindex="4"
          :placeholder="configs.aWord || '欢迎您，请点击此处，动动您的小手指，留下您的👣  ...'"
          v-model="comment.content"
          class="commentbody"
        ></textarea>
        <label class="input-label">{{
          configs.aWord || "欢迎您，请点击此处，动动您的小手指，留下您的👣  ..."
        }}</label>
      </div>
      <div
        class="comment-preview markdown-body"
        v-else
        v-html="renderedContent"
      ></div>
      <!-- 上传图片预览 -->
      <div id="upload-img-show"></div>
      <!-- 表情开关 -->
      <p id="emotion-toggle" class="no-select">
        <span @click="handleToggleDialogEmoji">{{
          !emojiDialogVisible ? "戳这里哦，宝宝给您表演表情包 OωO" : "喜欢宝宝的表演吧 ヾ(≧∇≦*)ゝ"
        }}</span>
      </p>
      <transition name="emoji-fade">
        <VEmojiPicker
          :pack="emojiPack"
          @select="handleSelectEmoji"
          v-if="emojiDialogVisible"
        />
      </transition>
      <div class="author-info">
        <!-- 用户头像信息 -->
        <div 
          class="commentator"
          style="pointer-events: initial;"
          @click="handleAvatarUploadInputOpen"
        >
          <input 
            type="file"
            style="display: none;"
            accept="image/*"
            ref="commentAvatarUploadFileInputEle"
            @change="handleAvatarUpload($event)"
          />

          <img :src="avatar"
            class="avatar"
            @error="handleAvatarError"
          />
          <div class="socila-check" :class="[checkType.back]">
            <i :class="[checkType.icon]" aria-hidden="true"></i>
          </div>
        </div>
        <PopupInput
          class="cmt-popup cmt-author"
          popupStyle="margin-left: -115px"
          :popupText="configs.authorPopup || '输入QQ号将自动拉取昵称和头像 ♪(´▽｀)'"
          inputType="text"
          placeholder="* 昵称"
          id="author"
          localStorageDataCacheKey="qiushaocloud-halo-comment-author"
          v-model="comment.author"
          @blurInput="pullInfo"
        />
        <PopupInput
          class="cmt-popup"
          popupStyle="margin-left: -65px;"
          :popupText="configs.emailPopup || '您的邮箱将收到回复通知 ๑乛◡乛๑'"
          inputType="text"
          placeholder="* 电子邮件"
          id="email"
          localStorageDataCacheKey="qiushaocloud-halo-comment-email"
          v-model="comment.email"
          @blurInput="pullInfo"
        />
        <PopupInput
          class="cmt-popup"
          popupStyle="margin-left: -55px;"
          :popupText="configs.urlPopup || '请不要打小广告哦 (^し^)'"
          inputType="text"
          placeholder="个人站点"
          id="url"
          localStorageDataCacheKey="qiushaocloud-halo-comment-authorUrl"
          v-model="comment.authorUrl"
        />
      </div>
      <ul class="comment-buttons">
        <li v-if="comment.content" class="middle" style="margin-right: 5px">
          <a
            class="button-preview-edit"
            href="javascript:;"
            rel="nofollow noopener"
            @click="handlePreviewContent"
            >{{ previewMode ? "编辑" : "预览" }}</a
          >
        </li>
        <!-- <li
            class="middle"
            style="margin-right:5px"
          >
            <a
              class="button-preview-edit"
              href="javascript:void(0)"
              rel="nofollow noopener"
              @click="handleGithubLogin"
            >Github 登陆</a>
        </li>-->
        <li class="middle">
          <a
            class="button-submit"
            href="javascript:;"
            tabindex="5"
            rel="nofollow noopener"
            @click="handleSubmitClick"
            >提交</a
          >
        </li>
      </ul>
    </form>
  </section>
</template>

<script>
/* eslint-disable no-unused-vars */
import Vue from "vue";
import marked from "j-marked/lib/marked";
import md5 from "md5";
import VEmojiPicker from "./EmojiPicker/VEmojiPicker";
import emojiData from "./EmojiPicker/data/emojis2.js";
import { renderedEmojiHtml } from "@/utils/emojiutil";
import {
  isEmpty,
  isObject,
  return2Br,
  getUrlKey,
  isQQ,
  queryStringify,
  isInVisibleArea,
} from "@/utils/util";
import commentApi from "../api/comment";
import axios from "axios";
import PopupInput from "./PopupInput";
import globals from "@/utils/globals.js";
import POWERMODE from "@/libs/activate-power-mode.js";

export default {
  name: "CommentEditor",
  components: {
    VEmojiPicker,
    PopupInput,
  },
  props: {
    targetId: {
      type: Number,
      required: false,
      default: 0,
    },
    target: {
      type: String,
      required: false,
      default: "posts",
      validator: function(value) {
        return ["posts", "sheets", "journals"].indexOf(value) !== -1;
      },
    },
    replyComment: {
      type: Object,
      required: false,
      default: () => {},
    },
    options: {
      required: false,
      default: [],
    },
    configs: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      emojiPack: emojiData,
      emojiDialogVisible: false,
      comment: {
        author: "",
        avatar: "",
        authorUrl: "",
        email: "",
        content: ""
      },
      previewMode: false,
      infoes: [],
      warnings: [],
      successes: [],
      checkType: {
        back: "gravatar-check",
        icon: "fa fa-google",
      },
      globalData: globals,
      lockPullAvatar: false,
      avatar: ""
    };
  },
  computed: {
    renderedContent() {
      const html = this.comment.content ? marked(this.comment.content) : "";
      return return2Br(renderedEmojiHtml(html));
    },
    // commentValid() {
    //   return (
    //     !isEmpty(this.comment.author) &&
    //     !isEmpty(this.comment.email) &&
    //     !isEmpty(this.comment.content)
    //   );
    // },
    isReply() {
      return this.globalData.replyId != 0;
    },
    isCurrReply() {
      const isCurr =
        !this.replyComment || this.globalData.replyId == this.replyComment.id;

      // TODO：滚动定位有bug，先关闭，后面有时间来修复
      // if (isCurr) {
      //   // 获取当前评论组件相对于document的位置并跳转
      //   if (this.isReply) {
      //     this.viewJump((dom) => {
      //       // 获取定位并移动视角
      //       var rootOffsetTop = this.$root.$el.offsetTop;
      //       var offsetTop = dom.offsetTop + rootOffsetTop;
      //       var clientHeight = window.innerHeight;
      //       var objHeight = dom.offsetHeight;
      //       window.scrollTo(
      //         document.body.scrollWidth,
      //         offsetTop - clientHeight + objHeight + 20
      //       );
      //     });
      //   }
      // }
      return isCurr;
    },
    respondId() {
      return "respond-" + (!this.replyComment ? 0 : this.replyComment.id);
    },
  },
  watch: {
    options(n, o) {
      if (n && n.gravatar_source !== o.gravatar_source) {
        this.updateAvatar();
      }
    },
  },
  created() {
    // Get info from local storage
    var author = localStorage.getItem("qiushaocloud-halo-comment-author");
    var authorUrl = localStorage.getItem("qiushaocloud-halo-comment-authorUrl");
    var email = localStorage.getItem("qiushaocloud-halo-comment-email");
    this.comment.author = author ? author : "";
    this.comment.authorUrl = authorUrl || "";
    this.comment.avatar = this.avatar;
    this.comment.email = email ? email : "";
    this.updateAvatar();

    this.$nextTick(() => {
      POWERMODE.colorful = true; // make power mode colorful
      POWERMODE.shake = false; // turn off shake
      document.body.addEventListener("input", POWERMODE);
    });
  },
  methods: {
    handleAvatarUploadInputOpen() {
      if (!this.configs.isAllowUploadAvatar)
        return;

      this.$refs.commentAvatarUploadFileInputEle.dispatchEvent(new MouseEvent('click'))
    },
    handleAvatarUpload(event) {
      if (!this.configs.isAllowUploadAvatar)
      return;
        
      const file = event.target.files[0];
      if (!file)
        return;

      commentApi
        .uploadAvatar(file)
        .then((response) => {
          const resData = response.data;
          if (resData.code !== 200) {
            console.error('uploadAvatar failure, resData:', resData);
            return;
          }

          console.info('uploadAvatar success, resData:', resData);

          this.avatar = resData.data.url;

          localStorage.setItem("qiushaocloud-halo-comment-avatar", this.avatar);
          localStorage.setItem("qiushaocloud-halo-comment-avatar-key", this.comment.author+'###'+this.comment.email);
        })
        .catch((error) => {
          console.error('uploadAvatar error:', error);
        });
    },
    updateAvatar() {
      var avatar = localStorage.getItem("qiushaocloud-halo-comment-avatar");
      this.avatar = avatar ? avatar : this.pullGravatarInfo(true);

      localStorage.setItem("qiushaocloud-halo-comment-avatar", this.avatar);
      localStorage.setItem("qiushaocloud-halo-comment-avatar-key", this.comment.author+'###'+this.comment.email);
    },
    handleSubmitClick() {
      if (isEmpty(this.comment.author)) {
        this.$tips("昵称不能为空", 5000, this);
        return;
      }
      if (isEmpty(this.comment.email)) {
        this.$tips("邮箱不能为空", 5000, this);
        return;
      }
      if (isEmpty(this.comment.content)) {
        this.$tips("评论内容不能为空", 5000, this);
        return;
      }

      // Submit the comment
      this.comment.avatar = this.avatar;
        
      this.comment.postId = this.targetId;
      if (this.replyComment) {
        // Set parent id if available
        this.comment.parentId = this.replyComment.id;
      }
      commentApi
        .createComment(this.target, this.comment, this.configs)
        .then((response) => {
          // Store comment author, email, authorUrl
          localStorage.setItem("qiushaocloud-halo-comment-author", this.comment.author);
          localStorage.setItem("qiushaocloud-halo-comment-email", this.comment.email);
          localStorage.setItem("qiushaocloud-halo-comment-authorUrl", this.comment.authorUrl);
          localStorage.setItem("qiushaocloud-halo-comment-avatar", this.avatar);
          localStorage.setItem("qiushaocloud-halo-comment-avatar-key", this.comment.author+'###'+this.comment.email);
          
          this.$emit('checkIsAdmin');

          // clear comment
          this.comment.content = "";
          this.previewMode = false;
          this.handleCommentCreated(response.data.data);
        })
        .catch((error) => {
          this.previewMode = false;
          this.handleFailedToCreateComment(error.response);
        });
    },
    handlePreviewContent() {
      this.previewMode = !this.previewMode;
    },
    handleCommentCreated(createdComment) {
      if (createdComment.status === "PUBLISHED") {
        // 成功后直接新增新的评论node
        try {
          if (createdComment.parentId === 0) {
            this.$emit('createdNewRootCommentNode', createdComment);
          }else{
            this.createdNewNode(createdComment);
          }

          this.$tips("评论成功！", 5000, this);

          this.$parent.$emit("post-success", {
            target: this.target,
            targetId: this.targetId,
          });
        } catch {
          this.$tips("评论成功，刷新即可显示最新评论！", 5000, this);
        }
      } else {
        this.$tips("您的评论已经投递至博主，等待博主审核！", 5000, this);
      }
    },
    handleAvatarError(e) {
      const img = e.target || e.srcElement;
      img.src = this.configs.avatarError;
      img.onerror = null;
    },
    createdNewNode(newComment) {
      let elDom = this.$root.$el;
      let pr = {
        targetId: this.targetId,
        target: this.target,
        options: this.options,
        configs: this.configs,
        comment: newComment,
      };

      pr =
        newComment.parentId == 0
          ? pr
          : {
              ...pr,
              ...{
                isChild: true,
                parent: this.replyComment,
                depth: this.$parent.selfAddDepth,
              },
            };

      const CommentNode = () => import("./CommentNode.vue");
      // 创建一个组件
      let comment = new Vue({
        render: (h) => {
          return h(CommentNode, {
            props: pr,
          });
        },
      });

      let dom;
      if (newComment.parentId == 0) {
        if (elDom.getElementsByClassName("commentwrap").length > 0) {
          dom = elDom.getElementsByClassName("commentwrap")[0];
        } else {
          dom = document.createElement("ul");
          dom.setAttribute("class", "commentwrap");
          let emptyDom = elDom.getElementsByClassName("comment-empty")[0];
          emptyDom.parentNode.replaceChild(dom, emptyDom);
        }
      } else {
        // 获取li
        let parentDom = elDom.getElementsByClassName(
          "comment-" + this.replyComment.id
        )[0];
        // 获取li下的ul节点
        let replyDom = parentDom.getElementsByTagName("ul");
        if (replyDom.length > 0) {
          dom = replyDom[0];
        } else {
          dom = document.createElement("ul");
          dom.setAttribute("class", "children");
          parentDom.appendChild(dom);
        }
      }

      let nodeDom = document.createElement("div");
      if (dom.children[0]) {
        dom.insertBefore(nodeDom, dom.children[0]);
      } else {
        dom.appendChild(nodeDom);
      }

      comment.$mount(nodeDom);
    },
    handleFailedToCreateComment(response) {
      if (response.status === 400 && response.data) {
        this.$tips(response.data.message, 5000, this);
        if (response.data.data) {
          const errorDetail = response.data.data;
          if (isObject(errorDetail)) {
            Object.keys(errorDetail).forEach((key) => {
              this.$tips(errorDetail[key], 5000, this);
            });
          }
        }
      }
    },
    handleToggleDialogEmoji() {
      this.emojiDialogVisible = !this.emojiDialogVisible;
    },
    handleSelectEmoji(args) {
      let emoji, type;
      let emojiComment;

      if (args.length == 0) return;

      if (args.length > 0) {
        emoji = args[0];
      }
      if (args.length > 1) {
        type = args[1];
      }
      if (!type) {
        emojiComment = emoji.name;
      } else {
        if (type === "Math") {
          emojiComment = "f(x)=∫(" + emoji.name + ")sec²xdx";
        } else if (type === "BBCode") {
          // 区分扩展名，gif末尾加个感叹号
          emojiComment = `:${emoji.name +
            (emoji.extension === "gif" ? "!" : "")}:`;
        }
      }
      this.comment.content += " " + emojiComment + " ";
    },
    handleGithubLogin() {
      const githubOauthUrl = "http://github.com/login/oauth/authorize";
      const query = {
        client_id: "a1aacd842bc158abd65b",
        redirect_uri: window.location.href,
        scope: "public_repo",
      };
      window.location.href = `${githubOauthUrl}?${queryStringify(query)}`;
    },
    handleGetGithubUser() {
      const accessToken = this.handleGetGithubAccessToken();
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://api.github.com/user",
          {
            params: {
              access_token: accessToken,
            },
          }
        )
        .then(function(response) {
          this.$tips(response, 5000, this);
        })
        .catch((error) => {
          this.$tips(error, 5000, this);
        });
    },
    handleGetGithubAccessToken() {
      const code = getUrlKey("code");
      if (code) {
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",
            {
              params: {
                client_id: "a1aacd842bc158abd65b",
                client_secret: "0daedb3923a4cdeb72620df511bdb11685dfe282",
                code: code,
              },
            }
          )
          .then(function(response) {
            let args = response.split("&");
            let arg = args[0].split("=");
            let access_token = arg[1];
            this.$tips(access_token, 5000, this);
            return access_token;
          })
          .catch((error) => {
            this.$tips(error, 5000, this);
          });
      }
    },
    cancelReply(e) {
      e.stopPropagation();
      // 当replyId为0时则为回复博主
      this.globalData.replyId = 0;
      this.globalData.isReplyData = false;

      // TODO：滚动定位有bug，先关闭，后面有时间来修复
      // 取消回复后，将跳转至回复前的地方
      // var targetDom = this.$el.previousSibling;
      // var offsetTop = targetDom.offsetTop + this.$root.$el.offsetTop;
      // window.scrollTo(document.body.scrollWidth, offsetTop);
    },
    pullInfo() {
      this.$emit('checkIsAdmin');

      let author = this.comment.author;
      let authorQQ = author;
      const cacheQqStr = window.localStorage.getItem('qiushaocloud-halo-comment-qq');
      const cacheQq = cacheQqStr ? JSON.parse(cacheQqStr) : undefined;

      if (authorQQ && cacheQq) {
        if (
          this.comment.email === cacheQq.email
          && authorQQ === cacheQq.nickname
        ) {
          authorQQ = cacheQq.qq;
        }
      }

      if (authorQQ && authorQQ.length != 0 && isQQ(authorQQ)) {
        // 如果是QQ号，则拉取QQ头像
        this.pullQQInfo(() => {
          this.$tips("拉取QQ信息失败！尝试拉取Gravatar", 2000, this);
          // 如果QQ拉取失败，则尝试拉取Gravatar
          this.pullGravatarInfo();
        });
        return;
      }

      // 防止刚拉取完QQ头像就拉取Gravatar头像
      if (this.lockPullAvatar) {
        this.lockPullAvatar = false;
        return;
      }

      // 否则拉取Gravatar头像
      this.pullGravatarInfo();
    },
    pullQQInfo(errorQQCallback) {
      let _self = this;

      let authorQQ = _self.comment.author;
      const cacheQqStr = window.localStorage.getItem('qiushaocloud-halo-comment-qq');
      const cacheQq = cacheQqStr ? JSON.parse(cacheQqStr) : undefined;

      if (authorQQ && cacheQq) {
        if (
          _self.comment.email === cacheQq.email
          && authorQQ === cacheQq.nickname
        ) {
          if ((Date.now() - cacheQq.saveTs) < 60000) {
            return new Promise((resolve)=>{
                _self.comment.author = cacheQq.nickname;
                _self.comment.email = cacheQq.email;
                _self.avatar = cacheQq.avatar;
              resolve();
            });
          }

          authorQQ = cacheQq.qq;
        }
      }

      // 拉取QQ昵称，头像等
      axios
        .get("https://api.lixingyong.com/api/qq", {
          params: {
            id: authorQQ,
          },
        })
        .then(function(res) {
          let data = res.data;
          if (!!data.code && data.code == 500) {
            errorQQCallback();
          }

          if (
            _self.comment.author === data.nickname
            && _self.comment.email === data.email
            && _self.avatar === data.avatar
          ) {
            return;
          }

          _self.$tips("拉取QQ头像成功！", 2000, _self);
          _self.comment.author = data.nickname;
          _self.comment.email = data.email;
          _self.avatar = data.avatar;
          _self.lockPullAvatar = true;

          _self.comment.avatar = _self.avatar;

          localStorage.setItem("qiushaocloud-halo-comment-author", _self.comment.author);
          localStorage.setItem("qiushaocloud-halo-comment-email", _self.comment.email);
          localStorage.setItem("qiushaocloud-halo-comment-authorUrl", _self.comment.authorUrl);
          localStorage.setItem("qiushaocloud-halo-comment-avatar", _self.avatar);
          localStorage.setItem("qiushaocloud-halo-comment-avatar-key", _self.comment.author+'###'+_self.comment.email);
          
          localStorage.setItem('qiushaocloud-halo-comment-qq', JSON.stringify({
            qq: data.qq,
            nickname: data.nickname,
            email: data.email,
            avatar: data.avatar,
            saveTs: Date.now()
          }));

          _self.$emit('checkIsAdmin');
        })
        .catch(() => {
          errorQQCallback();
        });
    },
    pullGravatarInfo(isDefault) {
      // 由本地缓存的图片优先用本地缓存的
      let cacheAvatar = localStorage.getItem("qiushaocloud-halo-comment-avatar");
      const cacheAvatarKey = localStorage.getItem("qiushaocloud-halo-comment-avatar-key");
      if (cacheAvatarKey !== this.comment.author+'###'+this.comment.email) {
        cacheAvatar = undefined;
      }
     
      const gravatarMd5 = `/${md5(this.comment.email)}`;
      // !!优先从主题配置取，取不到才从后台配置取
      const gravatarSource =
        this.configs.gravatarSource ||
        this.options.gravatar_source ||
        this.configs.gravatarSourceDefault;

      const avatar = cacheAvatar || (
        gravatarSource +
        `${gravatarMd5}?s=256&d=` +
        this.options.comment_gravatar_default
      );

      if (!isDefault) {
        this.avatar = avatar;

        localStorage.setItem("qiushaocloud-halo-comment-avatar", this.avatar);
        localStorage.setItem("qiushaocloud-halo-comment-avatar-key", this.comment.author+'###'+this.comment.email);
      } else {
        return avatar;
      }
    },
    // 锚点跳转
    viewJump(callback, targetDom) {
      // dom为异步更新，因此务必放在nextTick内，否则无法获取到dom。
      this.$nextTick(() => {
        var dom = targetDom || this.$el;
        // 若当前dom不在可视范围内，则将视角移动至dom下
        if (!isInVisibleArea(dom, this.$root.$el, "bottom")) {
          callback(dom);
        }
      });
    },
  },
};
</script>
