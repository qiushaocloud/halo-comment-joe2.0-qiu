<template>
  <div class="comment-wrp">
    <li
      :id="'comment-' + comment.id"
      class="comment"
      :class="commentClass"
      itemtype="http://schema.org/Comment"
      itemprop="comment"
    >
      <div class="contents">
        <div class="main shadow">
          <div class="profile">
            <a :href="comment.authorUrl" rel="nofollow noopener noreferrer" target="_blank">
            <!-- <a href="javascript:;" rel="nofollow noopener noreferrer"> -->
              <img
                :alt="comment.author"
                v-lazy="comment.isAdmin ? options.blog_logo : avatar"
                class="avatar"
                height="80"
                width="80"
                @error="handleAvatarError"
              />
            </a>
          </div>
          <div class="commentinfo">
            <section class="commeta">
              <div class="left">
                <h4 class="author">
                  <a :href="comment.authorUrl" rel="nofollow noopener noreferrer" target="_blank">
                  <!-- <a href="javascript:;" rel="noopener noreferrer nofollow"> -->
                    <img
                      :alt="comment.author"
                      v-lazy="comment.isAdmin ? options.blog_logo : avatar"
                      class="avatar"
                      height="24"
                      width="24"
                      @error="handleAvatarError"
                    />
                    <span
                      v-if="comment.isAdmin"
                      class="bb-comment isauthor"
                      title="博主"
                      >博主</span
                    >
                    {{ comment.author }}
                  </a>
                </h4>
              </div>

              <a
                class="comment-admin-link delete-btn"
                href="javascript:;"
                @click="handleDeleteClick"
                >删除</a
              >

              <!-- <a
                class="comment-admin-link top-btn"
                href="javascript:;"
                @click="handleTopClick"
                >置顶</a
              > -->

              <a
                class="comment-reply-link"
                :style="editing ? 'display:block;' : ''"
                href="javascript:;"
                @click="handleReplyClick"
                >回复</a
              >

              <div class="right">
                <div class="info">
                  <time
                    class="comment-time"
                    itemprop="datePublished"
                    :datetime="comment.createTime"
                    >发布于 {{ createTimeAgo }}
                  </time>
                  <span
                    v-if="configs.showUserAgent"
                    class="useragent-info"
                    v-html="compileUserAgent"
                  ></span>
                </div>
              </div>
            </section>
          </div>
          <div class="body markdown-body">
            <!-- 将所有的评论内容约束为一段 -->
            <div class="markdown-content" v-html="compileContent"></div>
          </div>
        </div>
      </div>
      <ul v-if="comment.children" class="children">
        <template v-for="(children, index) in comment.children">
          <CommentNode
            :isChild="true"
            :targetId="targetId"
            :target="target"
            :comment="children"
            :options="options"
            :configs="configs"
            :key="index"
            :depth="selfAddDepth"
            :parent="comment"
          />
        </template>
      </ul>
    </li>
    <CommentEditor
      :targetId="targetId"
      :target="target"
      :replyComment="comment"
      :options="options"
      :configs="configs"
      @checkIsAdmin="checkIsAdmin"
    />
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import "./index";
import { timeAgo, return2Br } from "@/utils/util";
import ua from "ua-parser-js";
import marked from "j-marked";
import { renderedEmojiHtml } from "@/utils/emojiutil";
import CommentEditor from "./CommentEditor.vue";
import globals from "@/utils/globals.js";
import commentApi from '../api/comment';

export default {
  name: "CommentNode",
  components: {
    CommentEditor,
  },
  props: {
    parent: {
      type: Object,
      required: false,
      default: undefined,
    },
    depth: {
      type: Number,
      required: false,
      default: 1,
    },
    isChild: {
      type: Boolean,
      required: false,
      default: false,
    },
    targetId: {
      type: Number,
      required: false,
      default: 0,
    },
    target: {
      type: String,
      required: false,
      default: "posts",
      validator: function (value) {
        return ["posts", "journals", "sheets"].includes(value);
      },
    },
    comment: {
      type: Object,
      required: false,
      default: () => {},
    },
    options: {
      type: Object,
      required: false,
      default: () => {},
    },
    configs: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editing: false,
      globalData: globals,
    };
  },
  created() {
    const renderer = {
      // eslint-disable-next-line no-unused-vars
      image(href, title) {
        return `<a data-fancybox target="_blank" rel="noopener noreferrer nofollow" href="${href}"><img src="${href}" class="lazyload comment_inline_img" onerror="this.src='https://originfastly.jsdelivr.net/gh/qiushaocloud/cdn-static@master/halo-comment/img_error.svg'"></a>`;
      },
      link(href, title, text) {
        return `<a href="${href}" title="${text}" target="_blank" rel="noopener noreferrer nofollow">${text}</a>`;
      },
    };
    marked.use({ renderer });
  },
  computed: {
    avatar() {
      // if (this.comment.avatar) {
      //   return this.comment.avatar;
      // } else {

      if (this.comment.avatarFromContent) {
        return this.comment.avatarFromContent;
      } else {
        // !!优先从主题配置取，取不到才从后台配置取
        const gravatarSource =
          this.configs.gravatarSource ||
          this.options.gravatar_source ||
          this.configs.gravatarSourceDefault;

        return `${gravatarSource}/${this.comment.gravatarMd5}?s=256&d=${this.options.comment_gravatar_default}`;
      }
    },
    compileContent() {
      var at = "";

      if (this.parent != undefined) {
        at =
          '<a href="' +
          this.parent.authorUrl +
          '" class="comment-at" rel="noopener noreferrer nofollow"> @' +
          this.parent.author +
          " </a>";
        // at =
        //   '<a href="javascript:;" class="comment-at"> @' +
        //   this.parent.author +
        //   " </a>";
      }

      // 获取转换后的marked
      const markedHtml = marked(at + this.comment.content);

      // 处理其中的表情包
      const emoji = renderedEmojiHtml(markedHtml);

      // 将回车转换为br
      return return2Br(emoji);
    },
    createTimeAgo() {
      return timeAgo(this.comment.createTime);
    },
    compileUserAgent() {
      if (!this.comment.userAgent) return "";
      var parser = new ua();
      parser.setUA(this.comment.userAgent);
      var result = parser.getResult();

      if (!result.browser.name) return "";
      var browserImg =
        "https://originfastly.jsdelivr.net/gh/qiushaocloud/cdn-static@master/halo-comment/ua/svg/" +
        result.browser.name.toLowerCase() +
        ".svg";
      var uaImg = "";

      switch (result.os.name) {
        case "Windows":
          switch (result.os.version) {
            case "7":
            case "8":
            case "10":
              uaImg =
                "https://originfastly.jsdelivr.net/gh/qiushaocloud/cdn-static@master/halo-comment/ua/svg/windows_win" +
                result.os.version +
                ".svg";
              break;
            case "":
              uaImg =
                "https://originfastly.jsdelivr.net/gh/qiushaocloud/cdn-static@master/halo-comment/ua/svg/windows_" +
                result.os.version +
                ".svg";
              break;
            default:
              uaImg =
                "https://originfastly.jsdelivr.net/gh/qiushaocloud/cdn-static@master/halo-comment/ua/svg/windows.svg";
              break;
          }
          break;
        default:
          uaImg =
            "https://originfastly.jsdelivr.net/gh/qiushaocloud/cdn-static@master/halo-comment/ua/svg/" +
            result.os.name.replace(/\s+/g, "").toLowerCase() +
            ".svg";
          break;
      }

      let returnStr = `（<img src="${browserImg}" onerror="this.src='https://originfastly.jsdelivr.net/gh/qiushaocloud/cdn-static@master/halo-comment/ua/svg/unknow.svg'" alt="ua-browser"/>  ${result.browser.name} ${result.browser.version} <img src="${uaImg}" onerror="this.src='https://originfastly.jsdelivr.net/gh/qiushaocloud/cdn-static@master/halo-comment/ua/svg/unknow.svg'" alt="ua-os"/> ${result.os.name} ${result.os.version}）`
      
      if (this.configs.isGetIpLocation && this.comment.ipLocation) {
        returnStr += `「${this.comment.ipLocation}」`;
      }

      return returnStr;
    },
    selfAddDepth() {
      return this.depth + 1;
    },
    commentClass() {
      return "depth-" + this.depth + " comment-" + this.comment.id;
    },
  },
  methods: {
    handleReplyClick(e) {
      e.stopPropagation();
      // 设置状态为回复状态
      this.globalData.replyId = this.comment.id;
    },
    handleDeleteClick(e) {
      e.stopPropagation();

      const {
        id: commentId,
        parentId
      } = this.comment;

      commentApi
        .deleteComment(this.target, commentId, this.configs)
        .then((response) => {
          console.log('deleteComment response:', response.data, ' ,commentId:', commentId);
          this.$tips(`删除评论成功`, 5000, this);

          const delDom = document.getElementById(`comment-${commentId}`);
          const childDom = delDom && delDom.querySelector('ul.children');
          
          if (delDom && childDom)
            delDom.removeChild(childDom);

          if (parentId === 0) {
            this.$emit('deletedRootCommenNode', commentId);
          } else {
            const delDomParentNode = delDom.parentNode;
            delDomParentNode.removeChild(delDom);

            if (delDomParentNode.className === 'comment-wrp')
              delDomParentNode.parentNode.removeChild(delDomParentNode);
          }
        })
        .catch((err) => {
          console.error('deleteComment err:', err.response, ' ,commentId:', commentId);
          if (err.response && err.response.data && err.response.data.message)
            this.$tips(`删除评论失败, ${err.response.data.message}`, 5000, this);
        });
    },
    handleTopClick(e) {
      e.stopPropagation();

      console.error('置顶功能等待开发');
    },
    handleAvatarError(e) {
      const img = e.target || e.srcElement;
      img.src = this.configs.avatarError;
      img.onerror = null;
    },
    checkIsAdmin (...args) {
      this.$emit('checkIsAdmin', ...args);
    }
  },
};
</script>
