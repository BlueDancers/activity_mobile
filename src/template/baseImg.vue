<template>
  <img class="baseComplate" :src="text" alt="" :style="style" />
</template>

<script>
import { handleStyle } from '../utils/index';
export default {
  props: {
    text: {
      type: String,
    },
    option: {
      type: Object,
      default: {}
    }
  },
  computed: {
    style() {
      let keyword = this.$store.state.app.isSoftKeyboard
      return handleStyle(this.option, keyword)
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.inline_img {
  user-select: none;
  border-style: none;
  width: 100%;
  height: 100%;
}
</style>