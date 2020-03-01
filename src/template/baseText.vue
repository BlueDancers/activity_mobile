<template>
  <div class="baseComplate" :style="style">
    <p v-html="text"></p>
  </div>
</template>

<script>
import { handleStyle } from "../utils/index";
export default {
  props: {
    text: {
      type: String,
      default: "按钮"
    },
    css: {
      type: Object,
      default: {}
    },
    option: {
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
.btn_con {
  user-select: none;
}
</style>