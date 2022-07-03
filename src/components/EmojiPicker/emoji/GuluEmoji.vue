<template>
  <span class="emoji-item" :title="data.description">
    <img :src="aluSrc" onerror="this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='"/>
  </span>
</template>

<script>
export default {
  name: "GuluEmoji",
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
      return this.url || `${this.assetsAddr}/assets/emoji/gulu/`;
    }
  },
  computed: {
    aluSrc() {
      return this.getUrl() + "icon_" + this.data.name.replace('gulu-','') + ".png";
    },
  },
};
</script>

