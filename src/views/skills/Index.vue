<template>
  <div class="content">
    <page-header class="page-header" :subheader="subheader">
      <template v-slot:header><h2>{{ $t("Skills.pageHeader") }}</h2></template>
    </page-header>

    <div class="middle">
      <!-- PROFILE -->
      <it-section class="it"></it-section>
      <!-- <work-section class="work"></work-section>
      <education-section class="education"></education-section>
      <publicated-section class="publicated"></publicated-section>
      <other-section class="other"></other-section> -->
    </div>
  </div>
</template>
<script>
// import InnerHeader from "./components/InnerHeader";
import itSection from "./components/it";
// import workSection from "./components/work";
// import publicatedSection from "./components/publicated";
// import educationSection from "./components/education";
// import otherSection from "./components/other";
import PageHeader from "@/components/Header";
export default {
  name:"skills",
  components: {
    itSection,
    // workSection,
    // publicatedSection,
    // educationSection,
    // otherSection,
    PageHeader,
  },
  data(){
    return{
      subheader:{
        hiddentitle:true,
        active:true
      }
    }
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

/deep/ h5  {
  background-color: rgb(218, 24, 24);
  flex: 2 2 auto;
  // -webkit-flex: 2 2 auto;
  font-size: 10pt;
  font-weight: bold;
  color: $color-worktable-heading;
}
/deep/ h4  {
  background-color: rgba(241, 110, 110, 0.596);
  // flex: 2 2 auto;
  // // -webkit-flex: 2 2 auto;
  // font-size: 10pt;
  // font-weight: bold;
  // color: $color-worktable-heading;
}

.page-header{
  flex:1 1 100%;
}

.content {
  background-color: rgb(0, 68, 255);
  // display:flex;
  flex:1 1 100%;

  .middle {
    background-color: rgb(228, 185, 245);

    .profile {
      background-color: rgb(19, 0, 189);
    }

    .work {
      background-color: lightcoral;
    }
    .education {
      background-color: rgb(180, 128, 240);
    }
    .publicated {
      background-color: lightcoral;
    }
    .other {
      background-color: lightcoral;
    }
  }
}
</style>
