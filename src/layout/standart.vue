<template>
  <div>
    <div class="page" data-size="A4">

      <div class="container-drawer">
        <my-drawer></my-drawer>
      </div>
      <div class="container-content">
        <letter-page v-if="content=='letter'"></letter-page>
        <title-page v-if="content=='title'"></title-page>
        <cv-page v-if="content=='cv'"></cv-page>
        <skills-page v-if="content=='skills'"></skills-page>
        <highcf-page v-if="content=='hightCertification'"></highcf-page>
        <middlecf-page v-if="content=='middleCertification'"></middlecf-page>
        <lowcf-page v-if="content=='lowCertification'"></lowcf-page>
        <lowcf-dbpage v-if="content=='lowCertificationDouble'"></lowcf-dbpage>
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
    TitlePage: () => import("@/views/title/Index"),
    CvPage: () => import("@/views/cv/Index"),
    SkillsPage: () => import("@/views/skills/Index"),
    highcfPage: () => import("@/views/certification/HighCertification"),
    middlecfPage: () => import("@/views/certification/MiddleCertification"),
    lowcfPage: () => import("@/views/certification/LowCertification"),
    lowcfDbpage: () => import("@/views/certificationDouble/LowCertification"),
    // Page: () => import("@/views/title/Index"),
  },
};
</script>

<style lang="scss" scoped>
.page {
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap; /* | wrap | wrap-reverse; */
  justify-content: flex-start;
  align-items: stretch;
  // flex-wrap: wrap;
}

.page[data-size="A4"] {
  width: 21cm;
  height: 29.7cm;
}

.container-drawer {
  background-color: $color-drawer-background;
  flex-basis: 7cm;
  // border:2px black solid;
}

.container-content {
  background-color: white;
  // background-color: rgba(202, 7, 160, 0.726);
  flex-basis: 14cm;
  // border:2px rgb(5, 27, 148) solid;
  // padding-bottom: 1cm;
  margin-left: 0.5cm;
  margin-right: 0.5cm;

  display: flex;
  // flex-basis: inherit;

  // min-width:100%;
  // max-width:100%;
}
</style>