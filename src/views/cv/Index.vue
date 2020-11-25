<template>
  <div class="cv-content">
    <page-header :subheader="subheader">
      <template v-slot:header
        ><h2 id="cv">{{ $t("Cv.pageHeader") }}</h2></template
      >
      <template v-slot:subheader>Ewig langer Subheader um zu schaun</template>
    </page-header>

    <div class="middle">
      <!-- PROFILE -->
      <profile-section class="profile"></profile-section>
      <work-section class="work"></work-section>
      <education-section class="education"></education-section>
      <publicated-section class="publicated"></publicated-section>
      <other-section class="other"></other-section>
    </div>
    <div class="footer"></div>
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
  name: "cv",
  components: {
    profileSection,
    workSection,
    publicatedSection,
    educationSection,
    otherSection,
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
$margin-section-bottom:0.6cm;
// $margin-content-left: 0.25cm;
// $margin-inner-content-left: 0.15cm;
// $margin-group-bottom: 0.5cm;
// $item-padding-bottom: 0.2cm;

/deep/ h5 {
  // background-color: rgb(218, 24, 24);
  font-size: 10pt;
  font-weight: bold;
  color: $color-darkest;
}
/deep/ h4 {
  // background-color: rgb(61, 4, 4);
  text-transform: uppercase;
  font-family: Raleway;
  font-size: 11pt;
  font-style: normal;
  font-weight: normal;
}

.cv-content {
  // background-color: aqua;
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
    // background-color: rgb(228, 185, 245);
      display:flex;
      flex-wrap:wrap;
      

    .profile {
      // background-color: rgb(19, 0, 189);
      flex: 0 0 100%;
      margin-bottom:$margin-section-bottom;
    }

    .work {
      // background-color: lightcoral;
      flex: 0 0 100%;
      margin-bottom:$margin-section-bottom;
    }
    .education {
      // background-color: rgb(180, 128, 240);
      flex: 0 0 100%;
      margin-bottom:$margin-section-bottom;
    }
    .publicated {
      // background-color: lightcoral;
      flex: 0 0 100%;
      margin-bottom:$margin-section-bottom;
    }
    .other {
      // background-color: lightcoral;
      flex: 0 0 100%;
      margin-bottom:$margin-section-bottom;
    }
  }

  .footer {
    // background-color: rgb(222, 135, 171);
    min-width: 5cm;
    min-height: 1cm;
    flex: 0 0 100%;
  }
}
</style>
