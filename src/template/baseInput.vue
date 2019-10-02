<template>
  <div>
    <input class="baseComplate" type="text" :style="style" />
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
    },
    inputName: {
      type: String,
      default: 'default'
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
</style>