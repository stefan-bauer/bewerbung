<template>
  <certification-view :img="img" :imgDefault="imgDefault">
    <template v-slot:header><h2 id="lowcf">{{$t("LowCertification.pageHeader")}}</h2></template>
    <template v-slot:subheader> {{$t("LowCertification.subHeader")}} </template>
  </certification-view>
</template>

<script>
import certificationView from "./Index";
export default {
  name: "LowCertification",

  data() {
    return {
      img:{
        // source:'images/persona/zeugnisse/Diplom.jpg',
        source: `images/persona/${this.$t('LowCertification.srcImgFront')}`,
        alt:'Certification Low Level'
      },
      imgDefault:{
        // source:'images/persona/zeugnisse/Diplom.jpg',
        source: `images/default/${this.$t('LowCertification.srcImgDefault')}`
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
