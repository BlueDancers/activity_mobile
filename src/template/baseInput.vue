<template>
  <input
    class="baseComplate"
    :placeholder="placeholder"
    :ref="inputName"
    type="text"
    :style="style"
  />
</template>

<script>
import { handleStyle } from '../utils/index';
export default {
  props: {
    id: {
      type: String,
    },
    text: {
      type: String,
      default: '按钮'
    },
    option: {
      type: Object,
      default: {}
    },
    inputName: {
      type: String,
      default: 'default'
    },
    placeholder: {
      type: String,
      default: '请填写'
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
</style>