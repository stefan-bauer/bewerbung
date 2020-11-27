<template>
  <div class="skill-content">
    <page-header class="header-container" :subheader="subheader">
      <template v-slot:header
        ><h2 id="skills">{{ $t("Skills.pageHeader") }}</h2></template
      >
    </page-header>

    <div class="middle">
      <it-section class="it"></it-section>
      <lang-section class="lang"></lang-section>
    </div>

    <div class="footer"></div>
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

$margin-section-bottom:0.6cm;


/deep/ h5 {
  // background-color: rgb(218, 24, 24);
  flex: 2 2 auto;
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
  font-weight: normal;

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

.skill-content {
  // background-color: rgb(0, 68, 255);
  flex: 0 0 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  line-height: 1.3;

  .header-container {
    // background-color: pink;
    flex: 0 0 100%;
  }

  .middle {
    // margin-top: 1cm;
    // background-color: rgb(228, 185, 245);
          display:flex;
      flex-wrap:wrap;
      flex: 0 0 100%;

    .it {
      background-color: rgb(181, 174, 238);
      flex: 0 0 100%;
      margin-bottom:$margin-section-bottom;
    }

    .lang {
      background-color: rgb(208, 129, 245);
      flex: 0 0 100%;
      margin-bottom:$margin-section-bottom;
    }
  }

  .footer {
    background-color: rgb(222, 135, 171);
    min-width: 5cm;
    min-height: 1cm;
    flex: 0 0 100%;
  }
}
</style>
