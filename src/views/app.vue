<template>
  <div class="core" :style="{ height: coreHeigth }">
    <component
      v-for="(item, index) in template"
      :key="index"
      :is="item.name"
      :id="item.id"
      :option="item.css"
      :text="item.text"
      :editStatus="item.editStatus"
    ></component>
  </div>
</template>

<script>
import { getTemplate } from '../api/index';
import baseButtom from '../template/baseButtom';
import baseImg from '../template/baseImg';
import baseText from '../template/baseText';
export default {
  components: {
    baseButtom,
    baseImg,
    baseText
  },
  mounted() {
    let name = this.$route.params.name
    getTemplate(name).then(e => {
      console.log(e);
      if (e.data.code == 200) {
        this.template = e.data.data.datas
        this.height = e.data.data.objHeight
      }
    })
  },
  computed: {
    coreHeigth() {
      return (this.height / this.baseHeight) + 'vh'
    }
  },
  data() {
    return {
      template: [],
      height: 667,
      baseHeight: 6.67
    }
  }
}
</script>

<style>
.core {
  position: relative;
  margin: 0px;
  padding: 0px;
}
</style>