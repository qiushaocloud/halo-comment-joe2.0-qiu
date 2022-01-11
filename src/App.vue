<template>
  <div id="app">
    <Comment :id="81" type="post" :configs="configs" />
  </div>
</template>

<script>
import Comment from "./components/Comment";

export default {
  name: "app",
  components: {
    Comment,
  },
  data() {
    return {
      configs: {
        autoLoad: true,
        showUserAgent: true,
        gravatarType: "mm",
        gravatarSource: "",
        loadingStyle: "default",
        aWord: "欢迎您，请点击此处，动动您的小手指，留下您的👣  ...",
        authorPopup: "输入QQ号将自动拉取昵称和头像 |●´∀`|σ",
        emailPopup: "您的邮箱将收到回复通知 ๑乛◡乛๑",
        urlPopup: "请不要打小广告哦 (^し^)",
        notComment: "还没有评论哦，快来抢占沙发 ♪(´▽｀)",
      },
    };
  },
};
</script>
