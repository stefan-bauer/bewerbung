<template>
  <certification-view :img="img">
    <template v-slot:header><h2 id="diplom">Certification</h2></template>
    <template v-slot:subheader>MI6</template>

  </certification-view>
</template>

<script>
import certificationView from "@/views/certification/Index";
export default {
  name: "diplomEnglish",

  data() {
    return {
      img:{
        source:'images/persona/zeugnisse/Diplom.jpg',
        alt:'Diplom'
      }
    }
  },

  components: {
    certificationView,
  },

};
</script>

<style lang="scss" scoped>
</style>
