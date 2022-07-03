<template>
  <span class="emoji-item" :title="data.description">
    <img :src="tiebaSrc" onerror="this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='" />
  </span>
</template>

<script>
export default {
  name: "TiebaEmoji",
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
      return this.url || `${this.assetsAddr}/assets/emoji/smilies/`;
    }
  },
  computed: {
    tiebaSrc() {
      return this.getUrl() + "icon_" + this.data.name + ".gif";
    },
  },
};
</script>

