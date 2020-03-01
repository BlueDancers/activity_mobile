<template>
  <input
    class="baseComplate"
    :placeholder="option.placeholder"
    :ref="option.inputName"
    type="text"
    :style="style"
  />
</template>

<script>
import { handleStyle } from "../utils/index";
export default {
  props: {
    id: {
      type: String
    },
    text: {
      type: String,
      default: "按钮"
    },
    option: {
      type: Object,
      default: {}
    },
    css: {
      type: Object,
      default: {}
    }
  },
  computed: {
    style() {
      let keyword = this.$store.state.app.isSoftKeyboard;
      return handleStyle(this.css, keyword);
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
</style>