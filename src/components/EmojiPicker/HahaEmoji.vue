<template>
  <span class="emoji-item" :title="data.description">
    <img :src="hahaSrc" />
  </span>
</template>

<script>
export default {
  name: "HahaEmoji",
  props: {
    data: {
      type: Object,
    },
    url: {
      type: String,
      required: false,
      default:
        "https://gcore.jsdelivr.net/gh/qiushaocloud/halo-comment-joe2.0-qiu@master/assets/emoji/haha/",
    },
  },
  computed: {
    hahaSrc() {
      return this.url + "icon_" + this.data.name.replace('ha-','') + ".png";
    },
  },
};
</script>

