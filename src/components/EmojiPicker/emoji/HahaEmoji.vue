<template>
  <span class="emoji-item" :title="data.description">
    <img :src="hahaSrc" onerror="this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='" />
  </span>
</template>

<script>
export default {
  name: "HahaEmoji",
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
      return this.url || `${this.assetsAddr}/assets/emoji/haha/`;
    }
  },
  computed: {
    hahaSrc() {
      return this.getUrl() + "icon_" + this.data.name.replace('ha-','') + ".png";
    },
  },
};
</script>

