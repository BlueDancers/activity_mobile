<template>
  <button class="baseComplate" :style="style" @click="gotoLink">
    {{ text }}
  </button>
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
    link: {
      type: String,
    },
    option: {
      type: Object,
      default: {}
    },
    editStatus: {
      type: Boolean,
      default: false
    },
    refInput: {
      type: Array,
      default: []
    },
    btnType: {
      type: Number,
      default: 0
    },
    inputFromUrl: {
      type: String,
    },
    urlMethod: {
      type: String,
    }
  },
  computed: {
    style() {
      return handleStyle(this.option)
    }
  },
  methods: {
    gotoLink() {
      if (this.btnType == 0) {

      } else if (this.btnType == 1) {
        if (this.link) {
          location.href = this.link
        }
      } else if (this.btnType == 2) {
        this.$emit('form', {
          refInput: this.refInput,
          inputFromUrl: this.inputFromUrl,
          urlMethod: this.urlMethod
        })
      }
    }
  }
} 
</script>

<style lang="less" scoped>
.btn_con {
  user-select: none;
}
</style>