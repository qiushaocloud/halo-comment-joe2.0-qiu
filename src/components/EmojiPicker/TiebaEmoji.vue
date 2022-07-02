<template>
  <span class="emoji-item" :title="data.description">
    <img :src="tiebaSrc" />
  </span>
</template>

<script>
export default {
  name: "TiebaEmoji",
  props: {
    data: {
      type: Object,
    },
    url: {
      type: String,
      required: false,
      default:
        "https://gcore.jsdelivr.net/gh/qiushaocloud/halo-comment-joe2.0-qiu@master/assets/emoji/smilies/",
    },
  },
  computed: {
    tiebaSrc() {
      return this.url + "icon_" + this.data.name + ".gif";
    },
  },
};
</script>

