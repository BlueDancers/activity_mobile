<template>
  <div class="home"></div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { getTemplate } from '../api/index';
export default {
  mounted() {
    console.log(this.$route.pamars);
    getTemplate('11').then(e => {
      this.$router.push({ name: "index", pamars: { name: this.$route.pamars } })
    })
  },
};
</script>



<style lang="less" scoped>
.home_img {
  width: 200px;
  height: 200px;
}
</style>
