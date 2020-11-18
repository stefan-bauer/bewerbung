<template>
  <div>
    <div class="page" data-size="A4">
      <div class="container-drawer">
        <drawer-de v-if="language == 'de'"></drawer-de>
        <drawer-en v-if="language == 'en'"></drawer-en>
      </div>
      <div class="container-content" v-if="language == 'de'">
        <letter-de v-if="content == 'letter'"></letter-de>
        <title-de v-if="content == 'title'"></title-de>
        <cv-de v-if="content == 'cv'"></cv-de>
        <diplom-de v-if="content == 'diplom'"></diplom-de>
        <bachelor-de v-if="content == 'bachelor'"></bachelor-de>
      </div>
      <div class="container-content" v-if="language == 'en'">
        <letter-en v-if="content == 'letter'"></letter-en>
        <title-en v-if="content == 'title'"></title-en>
        <cv-en v-if="content == 'cv'"></cv-en>
        <diplom-en v-if="content == 'diplom'"></diplom-en>
        <bachelor-en v-if="content == 'bachelor'"></bachelor-en>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "standartLayout",
  props: ["language", "content"],
  components: {
    DrawerDe: () => import("./components/Drawer/german"),
    DrawerEn: () => import("./components/Drawer/english"),
    // ----------------------------------
    LetterDe: () => import("@/pages/letter/german"),
    LetterEn: () => import("@/pages/letter/english"),
    // ----------------------------------
    diplomDe: () => import("@/pages/diplom/german"),
    diplomEn: () => import("@/pages/diplom/english"),
    // ----------------------------------
    bachelorDe: () => import("@/pages/bachelor/german"),
    bachelorEn: () => import("@/pages/bachelor/english"),
    // ----------------------------------
    titleDe: () => import("@/pages/title/german"),
    titleEn: () => import("@/pages/title/english"),
    // ----------------------------------
    cvDe: () => import("@/pages/cv/german"),
    cvEn: () => import("@/pages/cv/english"),
    // ContentDe: () => import("./components/Content/german"),
    // ContentEn: () => import("./components/Content/english"),
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