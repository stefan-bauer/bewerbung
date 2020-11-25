<template>
  <div>
    <div class="page" data-size="A4">

      <div class="container-drawer">
        <my-drawer></my-drawer>
      </div>
      <div class="container-content">
        <letter-page v-if="content=='letter'"></letter-page>
        <!-- <title-page v-if="content=='title'"></title-page> -->
        <!-- <cv-page v-if="content=='cv'"></cv-page> -->
        <!-- <skills-page v-if="content=='skills'"></skills-page> -->
        <!-- <highcf-page v-if="content=='hightCertification'"></highcf-page> -->
        <!-- <middlecf-page v-if="content=='middleCertification'"></middlecf-page> -->
        <!-- <lowcf-page v-if="content=='lowCertification'"></lowcf-page> -->
        <!-- <lowcf-dbpage v-if="content=='lowCertificationDouble'"></lowcf-dbpage> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "standartLayout",
  props: [ "content"],
  components: {
    MyDrawer: () => import("./components/Drawer/Index"),
    LetterPage: () => import("@/views/letter/Index"),
    // TitlePage: () => import("@/views/title/Index"),
    // CvPage: () => import("@/views/cv/Index"),
    // SkillsPage: () => import("@/views/skills/Index"),
    // highcfPage: () => import("@/views/certification/HighCertification"),
    // middlecfPage: () => import("@/views/certification/MiddleCertification"),
    // lowcfPage: () => import("@/views/certification/LowCertification"),
    // lowcfDbpage: () => import("@/views/certificationDouble/LowCertification"),
  },
};
</script>

<style lang="scss" scoped>
.page {
  background-color: lightblue;
  display: flex;
  
  // background-color: white;
  // flex-direction: row;
  // flex-wrap: nowrap; /* | wrap | wrap-reverse; */
  // justify-content: flex-start;
  // align-items: stretch;
}

.page[data-size="A4"] {
  width: 21cm;
  height: 29.7cm;
}

.container-drawer {
  background-color: green;
  // background-color: $color-drawer-background;
  flex:0 0 7cm;

}

.container-content {
  background-color: rgb(179, 3, 3);
    // flex:0 0 14cm;
  // background-color: white;
  // display: flex;
  // flex:1 1 14cm;
  // padding-left: 0.5cm;
  // padding-right: 0.5cm;
}
</style>