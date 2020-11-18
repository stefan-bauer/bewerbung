<template>
<div>

  <!-- Letter -->
  <!-- language -->
  <standart-layout :language="language" content="letter"></standart-layout>
  <div class="mypagespace noPrint"></div>
  <standart-layout :language="language" content="title"></standart-layout>
  <div class="mypagespace noPrint"></div>
  <standart-layout :language="language" content="cv"></standart-layout>
  <div class="mypagespace noPrint"></div>
  <standart-layout :language="language" content="diplom"></standart-layout>
  <div class="mypagespace noPrint"></div>
  <standart-layout :language="language" content="bachelor"></standart-layout>
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
