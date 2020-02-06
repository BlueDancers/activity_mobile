<template>
  <div class="baseComplate" :style="style"></div>
</template>

<script>
import { handleStyle } from '../utils/index';
export default {
  props: {
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
.btn_con {
  user-select: none;
}
</style>