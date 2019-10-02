<template>
  <div class="baseComplate" :style="style">
    <p v-html="text"></p>
  </div>
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
    }
  },
  computed: {
    style() {
      return handleStyle(this.option)
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