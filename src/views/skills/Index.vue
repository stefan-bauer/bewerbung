<template>
  <div class="content">
    <page-header class="page-header" :subheader="subheader">
      <template v-slot:header
        ><h2>{{ $t("Skills.pageHeader") }}</h2></template
      >
    </page-header>

    <div class="middle">
      <it-section class="it"></it-section>
      <lang-section class="lang"></lang-section>
    </div>
  </div>
</template>
<script>
import itSection from "./components/it";
import langSection from "./components/lang";

import PageHeader from "@/components/Header";
export default {
  name: "skills",
  components: {
    itSection,
    langSection,
    PageHeader,
  },
  data() {
    return {
      subheader: {
        hiddentitle: true,
        active: true,
      },
    };
  },
  methods: {
    checkHtml(text) {
      console.log("text");
      console.log(text);
      let matchTag = /<(?:.|\s)*?>/g;
      let result = text.match(matchTag);
      console.log(result);
      return result;
    },
  },
};
</script>
<style lang="scss" scoped>

/deep/ h5 {
  // background-color: rgb(218, 24, 24);
  flex: 2 2 auto;
  // -webkit-flex: 2 2 auto;
  font-size: 10pt;
  font-weight: bold;
  color: $color-worktable-heading;
}
/deep/ h4 {
  // background-color: rgba(241, 110, 110, 0.596);
  text-transform: uppercase;
  font-family: Raleway;
  font-size: 11pt;
  font-style: normal;

  // -----grundeinstellunge h4
  display: block;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  // margin-block-start: 1.33em;
  // margin-block-end: 1.33em;
  // margin-inline-start: 0px;
  // margin-inline-end: 0px;
  font-weight: 400;
  // -------------

  // flex: 2 2 auto;
  // // -webkit-flex: 2 2 auto;
  // font-size: 10pt;
  // font-weight: bold;
  // color: $color-worktable-heading;
}

// /deep/ h3 { 
//   color:green !important;
//   font-size: 17pt !important;
// }

/deep/ .title {
  // color: $gray-middle;
}
/deep/ .description {
  // color: $color-worktable-heading;
  color: $gray-middle;
}

.page-header {
  flex: 1 1 100%;
}

.content {
  // background-color: rgb(0, 68, 255);
  flex: 1 1 100%;

  .middle {
    // margin-top: 1cm;
    // background-color: rgb(228, 185, 245);
    .it {
      // background-color: rgb(228, 185, 245);
      margin-top: 1cm;

    }

    .lang {
      // background-color: rgb(240, 245, 174);
      margin-top: 1cm;
    }
  }
}
</style>
