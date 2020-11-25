<template>
  <div class="content">
    <page-header :subheader="subheader">
      <template v-slot:header><h2 id="cv">{{ $t("Cv.pageHeader") }}</h2></template>
      <template v-slot:subheader >Ewig langer Subheader um zu schaun</template>
    </page-header>

    <div class="middle">
      <!-- PROFILE -->
      <profile-section class="profile"></profile-section>
      <work-section class="work"></work-section>
      <education-section class="education"></education-section>
      <publicated-section class="publicated"></publicated-section>
      <other-section class="other"></other-section>
    </div>
  </div>
</template>
<script>
// import InnerHeader from "./components/InnerHeader";
import profileSection from "./components/profile";
import workSection from "./components/work";
import publicatedSection from "./components/publicated";
import educationSection from "./components/education";
import otherSection from "./components/other";
import PageHeader from "@/components/Header";
export default {
  name:"cv",
  components: {
    profileSection,
    workSection,
    publicatedSection,
    educationSection,
    otherSection,
    // InnerHeader,
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
      // let text ='Hallo <b>ihr</b> lieben wie gehts'
      console.log("text");
      console.log(text);
      let matchTag = /<(?:.|\s)*?>/g;
      let result = text.match(matchTag);
      console.log(result);
      return result;
      // const myLocal=this.$i18n.locale
      // console.log(myLocal)
      // console.log(this.$i18n.messages)
      // console.log(this.$i18n.local)
    },
  },
};
</script>
<style lang="scss" scoped>
// $margin-content-left: 0.25cm;
// $margin-inner-content-left: 0.15cm;
// $margin-group-bottom: 0.5cm;
// $item-padding-bottom: 0.2cm;

/deep/ h5  {
  background-color: rgb(218, 24, 24);
  flex: 2 2 auto;
  // -webkit-flex: 2 2 auto;
  font-size: 10pt;
  font-weight: bold;
  color: $color-worktable-heading;
}
/deep/ h4  {
  background-color: rgb(61, 4, 4);
  // flex: 2 2 auto;
  // // -webkit-flex: 2 2 auto;
  // font-size: 10pt;
  // font-weight: bold;
  // color: $color-worktable-heading;
}

.content {
  background-color: aqua;
  // display:flex;

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
