<template>
  <certification-view :img="img" :imgDefault="imgDefault">
    <template v-slot:header><h2 id="highcf">{{$t("HighCertification.pageHeader")}}</h2></template>
    <template v-slot:subheader> {{$t("HighCertification.subHeader")}} </template>
  </certification-view>
</template>

<script>
import certificationView from "./Index";
export default {
  name: "HighCertification",

  data() {
    return {
      img:{
        // source:'images/persona/zeugnisse/Diplom.jpg',
        source: `images/persona/${this.$t('HighCertification.srcImg')}`,
        alt:'Certification High Level'
      },
      imgDefault:{
        // source:'images/persona/zeugnisse/Diplom.jpg',
        source: `images/default/${this.$t('HighCertification.srcImgDefault')}`
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
