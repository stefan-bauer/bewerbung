<template>
<div>

  <!-- Letter -->
  <!-- language -->
  <standart-layout content="letter"></standart-layout>
  <div class="mypagespace noPrint"></div>
  <standart-layout content="title"></standart-layout>
  <div class="mypagespace noPrint"></div>
  <standart-layout content="cv"></standart-layout>
  <div class="mypagespace noPrint"></div>
  <standart-layout content="skills"></standart-layout>
  <div class="mypagespace noPrint"></div>
  <standart-layout content="hightCertification"></standart-layout>
  <div class="mypagespace noPrint"></div>
  <standart-layout content="middleCertification"></standart-layout>
  <div class="mypagespace noPrint"></div>
  <standart-layout content="lowCertification"></standart-layout>
  <div class="mypagespace noPrint"></div>
  <standart-layout content="lowCertificationDouble"></standart-layout>
  <div class="mypagespace noPrint"></div>
  <!-- Cover -->
  <!-- CV -->

</div>
</template>

<script>
import StandartLayout from "@/layout/standart.vue";
export default {
  name: "Document",
  props: ["language"],
  // computed: {
  //   german() {
  //     if (this.language == "de") {
  //       return true;
  //     }
  //     return false;
  //   },
  // },
  mounted(){
    this.$i18n.locale = this.language;
  },
  components:{
    StandartLayout
  }
};
</script>

<style lang="scss" scoped>
.mypagespace {
  // width: 100%;
  width: 21cm;
  height: 10px;
  background-color: rgb(204, 204, 204);
}
</style>
