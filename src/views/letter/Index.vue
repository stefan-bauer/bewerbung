<template>
  <div class="container">
    <page-header :subheader="subheader">
      <template v-slot:header>{{ $t("letter.pageHeader") }}</template>
      <template v-slot:subheader>{{ $t("letter.hiddenHeader") }}</template>
    </page-header>
    <div class="middle">
      <div class="date" @click="click">
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
      </div>
    </div>
    <div class="footer"></div>
    <!-- </div>
    </div> -->

    <!-- <slot name="name" /> -->
  </div>
</template>

<script>
import PageHeader from "@/components/Header";
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
    PageHeader,
  },
  methods: {
    setAltImg(event) {
      event.target.src = `images/default/${this.$i18n.messages.default.letter.signingImg}`;
    },
    checkHtml(text) {
      // let text ='Hallo <b>ihr</b> lieben wie gehts'
      let matchTag = /<(?:.|\s)*?>/g;
      let result = text.match(matchTag);
      console.log(result);
      return result;
      // const myLocal=this.$i18n.locale
      // console.log(myLocal)
      // console.log(this.$i18n.messages)
      // console.log(this.$i18n.local)
    },
    click() {
      // let text ='Hallo <b>ihr</b> lieben wie gehts'
      // let matchTag = /<(?:.|\s)*?>/g;
      // let result = text.match (matchTag);
      // console.log (result);
      // const myLocal=this.$i18n.locale
      // console.log(`Img/${this.$t('letter.signingImg')}`)
      console.log(this.source);
      // console.log(this.$t('letter.signingImg'))
      // console.log(this.$i18n.messages)
      // console.log(this.$i18n.local)
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  // background-color: aquamarine;
  display: flex;
  flex-wrap: wrap;
  flex-basis: inherit;
  // justify-content: space-around;
  align-content: space-between;

  .middle {
    // background-color: orange;
    .date {
      // background-color: red;
      flex: 1 1 100%;
      font-family: Open Sans;
      font-size: 10pt;
      color: black;
      font-weight: bold;
      margin-bottom: 0.5cm;
    }

    .subject {
      // background-color: rgb(255, 127, 217);
      flex: 1 1 100%;

      font-family: Carlito;
      font-size: 10pt;
      color: black;
      // font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 1.5cm;
    }
    .salutation {
      // background-color: rgb(173, 247, 179);
      margin-bottom: 0.75cm;
      flex: 1 1 100%;

      font-family: Carlito;
      font-size: 10pt;
      color: black;
      font-weight: bold;
    }

    .letter {
      // background-color: rgb(244, 127, 255);
      font-family: Carlito;
      flex: 1 1 100%;
      font-size: 11pt;
      line-height: 1.3;
      // color: black;
      // font-weight: bold;

      p {
        // background-color: rgb(244, 127, 255);
        margin-bottom: 0.5cm;
        flex: 1 1 100%;
        // color: red;
      }

      // p:last-child {
      //   // margin-bottom: 0.5cm;
      //   background-color:yellowgreen;
      //   font-family: Carlito;
      //   font-size: 11pt;
      //   // color: black;
      //   // font-weight: bold;
      //   margin-bottom: 1cm;
      // }
    }

    .letter-ending {
      // background-color: lightseagreen;
      flex: 1 1 100%;

      p {
        // background-color: rgb(127, 219, 255);
        // margin-top: 1cm;
        // margin-bottom: 0.5cm;
        // font-family: Carlito;
        // font-size: 10pt;
        // color: black;
        // font-weight: bold;
        // flex: 1 1 100%;
        // padding:0.3cm;
      }

      .signing-name {
        // background-color: lightcoral;
        flex: 1 1 100%;
        margin-bottom: 0.5cm;
      }

      .signing-image {
        // background-color: brown;
        width: 30%;
        color: white;
        flex: 1 1 100%;
        margin-left: 0.25cm;
      }
    }
  }
  .footer {
    // background-color: burlywood;
    height: 0.2cm;
    flex: 1 1 100%;
  }
}
</style>