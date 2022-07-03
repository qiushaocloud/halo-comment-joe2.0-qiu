<template>
  <span class="emotion-secter emoji-item emotion-select-parent" :style="biliSpanStyle">
    <div class="img emotion-select-child" :style="biliImgStyle"></div>
  </span>
</template>

<script>
export default {
  name: "BilibiliEmoji",
  props: {
    data: {
      type: Object,
    },
    assetsAddr: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    },
  },
  methods: {
   getUrl () {
      return this.url || `${this.assetsAddr}/assets/emoji/bilibili/`;
    }
  },
  computed: {
    biliSpanStyle() {
      return (
        "background-image: url(" + this.getUrl() + "hd/ic_emoji_" + this.data.name + ".png);"
      );
    },
    biliImgStyle() {
      let background = this.getUrl() + this.data.name + ".png";
      let emoji = this.data;
      let dataStyle = "";
      Object.keys(emoji.style).forEach(function (item) {
        dataStyle += item + ":" + emoji.style[item] + ";";
      });
      return "background-image: url(" + background + ");" + dataStyle;
    },
  },
};
</script>
