<template>
  <button class="baseComplate" :style="style" @click="gotoLink">{{ text }}</button>
</template>

<script>
import { handleStyle } from "../utils/index";
export default {
  props: {
    text: {
      type: String,
      default: "按钮"
    },
    link: {
      type: String
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
  methods: {
    gotoLink() {
      if (this.option.btnType == 0) {
      } else if (this.option.btnType == 1) {
        if (this.option.link) {
          location.href = this.option.link;
        }
      } else if (this.option.btnType == 2) {
        this.$emit("form", {
          refInput: this.option.refInput,
          inputFromUrl: this.option.inputFromUrl,
          urlMethod: this.option.urlMethod
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.btn_con {
  user-select: none;
}
</style>