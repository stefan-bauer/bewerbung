<template>
  <certification-view :img="img" :imgDefault="imgDefault">
    <template v-slot:header><h2 id="middlecf">{{$t("MiddleCertification.pageHeader")}}</h2></template>
    <template v-slot:subheader> {{$t("MiddleCertification.subHeader")}} </template>
  </certification-view>
</template>

<script>
import certificationView from "./Index";
export default {
  name: "MiddleCertification",

  data() {
    return {
      img:{
        // source:'images/persona/zeugnisse/Diplom.jpg',
        source: `images/persona/${this.$t('MiddleCertification.srcImg')}`,
        alt:'Certification High Level'
      },
      imgDefault:{
        // source:'images/persona/zeugnisse/Diplom.jpg',
        source: `images/default/${this.$t('MiddleCertification.srcImgDefault')}`
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
