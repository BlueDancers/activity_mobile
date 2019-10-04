<template>
  <div class="core" :style="{ height: coreHeigth }">
    <component
      v-for="(item, index) in template"
      :key="index"
      :is="item.name"
      :id="item.id"
      :link="item.link"
      :option="item.css"
      :text="item.text"
      :editStatus="item.editStatus"
      :inputName="item.inputName"
      :ref="item.inputName ? item.inputName : item.id"
      :refInput="item.refInput"
      :btnType="item.btnType"
      :inputFromUrl="item.inputFromUrl"
      :urlMethod="item.urlMethod"
      @form="form"
    ></component>
  </div>
</template>

<script>
import { getTemplate } from '../api/index';
import baseButtom from '../template/baseButtom';
import baseImg from '../template/baseImg';
import baseText from '../template/baseText';
import baseInput from '../template/baseInput'
import axios from 'axios';
export default {
  components: {
    baseButtom,
    baseImg,
    baseText,
    baseInput
  },
  mounted() {
    let name = this.$route.params.name
    getTemplate(name).then(e => {
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
  },
  methods: {
    form(formList) {
      let { refInput, inputFromUrl, urlMethod } = formList
      let formData = {}
      refInput.map(e => {
        formData[e] = this.$refs[e][0].$el.value
      })
      for (const key in formData) {
        if (formData[key] == '') {
          this.$Toast('请完善表单')
          return false
        }
      }
      let request
      if (urlMethod == 'get') {
        request = {
          url: inputFromUrl,
          method: 'get',
          params: formData
        }
      } else {
        request = {
          url: inputFromUrl,
          method: 'post',
          data: formData
        }
      }
      axios.request(request).then(e => {
        this.$Toast(e)
      })
        .catch(err => {
          this.$Toast('网络出了小差.....')
        })
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