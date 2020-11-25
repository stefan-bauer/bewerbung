<template>
  <div class="letter-container">
    <div class="test-spacer-1"></div>
    <!-- <page-header  :subheader="subheader">
      <template v-slot:header>{{ $t("letter.pageHeader") }}</template>
      <template v-slot:subheader>{{ $t("letter.hiddenHeader") }}</template>
    </page-header> -->
    <div class="middle">
    <div class="test-spacer-2"></div>

      <!-- <div class="date">
        {{ $t("letter.date") }}
      </div>
      <div class="subject">
        {{ $t("letter.subject") }}
      </div>
      <div class="salutation">
        {{ $t("letter.salutation") }}
      </div>
      <div class="letter">
        <div v-for="(value, key) in $t('letter.letterContent')" :key="key">
          <p v-if="!checkHtml(value)">{{ value }}</p>
          <p v-if="checkHtml(value)" v-html="value" />
        </div>
      </div>

      <div class="letter-ending">
        <p>{{ $t("letter.letterEnding") }}</p>
        <div class="signing-name">
          {{ $t("letter.signing") }}
        </div>
        <div class="signing">
          <img
            :src="source"
            @error="setAltImg"
            alt="Signing"
            class="signing-image"
          />
        </div>
      </div> -->
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// import PageHeader from "@/components/Header";
export default {
  name: "letterLayout",
  data() {
    return {
      source: `images/persona/${this.$t("letter.signingImg")}`,
      subheader: {
        hiddentitle: true,
        active: true,
      },
    };
  },
  components: {
    // PageHeader,
  },
  methods: {
    setAltImg(event) {
      event.target.src = `images/default/${this.$i18n.messages.default.letter.signingImg}`;
    },
    checkHtml(text) {
      let matchTag = /<(?:.|\s)*?>/g;
      let result = text.match(matchTag);

      return result;

    },

    
  },
};
</script>

<style lang="scss" scoped>
.letter-container {
  background-color: aquamarine;

  .test-spacer-1{
    background-color: rgb(1, 77, 51);
    min-width: 5cm;
    min-height: 4cm;
    // max-height: 4cm;
  }
  // // align-self: center;
  // display: flex;
  // // align-items: center;
  // flex-wrap: wrap;
  // // flex:1 1 100%;
  // // flex-basis: inherit;
  // // // justify-content: space-around;
  // // align-content: flex-end;

.header-container{
  background-color:pink;
}


  .middle {
    background-color: orange;

        .test-spacer-2{
          background-color: rgb(1, 2, 77);
              min-width: 5cm;
    min-height: 4cm;
        }
    // // display: flex;
    // flex:1 1 100%;
    .date {
      // background-color: red;
      // // flex: 1 1 100%;
      // font-family: 'Open Sans';
      // font-size: 10pt;
      // color: black;
      // font-weight: bold;
      // margin-bottom: 0.5cm;
    }

    .subject {
      // background-color: rgb(255, 127, 217);
      // // flex: 1 1 100%;

      // font-family: Carlito;
      // font-size: 10pt;
      // color: black;
      // // font-weight: bold;
      // text-transform: uppercase;
      // margin-bottom: 1.5cm;
    }
    .salutation {
      // background-color: rgb(173, 247, 179);
      // margin-bottom: 0.75cm;
      // // flex: 1 1 100%;

      // font-family: Carlito;
      // font-size: 10pt;
      // color: black;
      // font-weight: bold;
    }

    .letter {
      // background-color: rgb(244, 127, 255);
      // font-family: Carlito;
      // // flex: 1 1 100%;
      // font-size: 11pt;
      // line-height: 1.3;


      p {
        // // background-color: rgb(244, 127, 255);
        // margin-bottom: 0.5cm;
        // // flex: 1 1 100%;
        // // color: red;
      }

    }

    .letter-ending {
      // background-color: lightseagreen;
      // flex: 1 1 100%;

      p {
        // background-color: rgb(127, 219, 255);
        // flex: 1 1 100%;
      }

      .signing-name {
        // background-color: lightcoral;
        // // flex: 1 1 100%;
        // margin-bottom: 0.5cm;
      }

      .signing-image {
        // background-color: brown;
        // width: 30%;
        // color: white;
        // flex: 1 1 100%;
        // margin-left: 0.25cm;
      }
    }
  }
  .footer {
    background-color: rgb(222, 135, 171);
        min-width: 5cm;
    min-height: 4cm;
    // height: 1.2cm;
    // margin-left:1cm;
    // margin-right:1cm;
    // flex: 1 1 100%;
  }
}
</style>