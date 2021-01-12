<template>
  <div class="letter-container">
    <!-- <div class="test-spacer-1">EINS</div> -->
    <page-header  :subheader="subheader">
      <template v-slot:header>{{ $t("letter.pageHeader") }}</template>
      <template v-slot:subheader>{{ $t("letter.hiddenHeader") }}</template>
    </page-header>
    <div class="middle">
      <!-- <div class="test-spacer-2">ZWEI</div> -->

      <div class="date">
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
    <div class="footer">
      <div class="addon">
        {{$t("letter.addOn")}}
      </div>
    </div>
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
      let matchTag = /<(?:.|\s)*?>/g;
      let result = text.match(matchTag);

      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.letter-container {
  // background-color: aquamarine;
  flex: 0 0 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  .header-container {
    // background-color: pink;
      flex: 0 0 100%;
  }

  .middle {
    // background-color: orange;
      flex: 0 0 100%;
      line-height: 1.2;

    .date {
      // background-color: rgb(255, 127, 217);
      font-family: 'Open Sans';
      font-size: 9.5pt;
      color: black;
      font-weight: bold;
      margin-bottom: 0.5cm;
    }

    .subject {
      // background-color: rgb(255, 127, 217);
      font-family: 'Open Sans';
      font-size: 9.5pt;
      color: black;
      // // font-weight: bold;
      // text-transform: uppercase;
      margin-bottom: 1.3cm;
    }

    .salutation {
      // background-color: rgb(173, 247, 179);
      margin-bottom: 0.75cm;
      font-family: 'Open Sans';
      font-size: 9.5pt;
      color: black;
      font-weight: bold;
    }

    .letter {
      // background-color: rgb(244, 127, 255);
      font-family: 'Open Sans';
      font-size: 9.5pt;
      line-height: 1.3;

      p {
        // // background-color: rgb(244, 127, 255);
        font-family: 'Open Sans';
        font-size: 9.5pt;
        margin-bottom: 0.4cm;
      }
    }

    .letter-ending {
      // background-color: lightseagreen;
      line-height: 1.3;
      
      p{
        font-family: 'Open Sans';
        font-size: 9.5pt;
        line-height: 1.3;
      }

      .signing-name {
        // background-color: lightcoral;
        font-family: 'Open Sans';
        font-size: 9.5pt;
        margin-bottom: 0.5cm;
      }

      .signing-image {
        // background-color: brown;
        width: 25%;
        color: white;
        flex: 0 0 100%;
        margin-left: 0.45cm;
      }
    }
  }
  .footer {
    // background-color: rgb(222, 135, 171);
    min-width: 5cm;
    min-height: 1px;
    flex: 0 0 100%;

    .addon{
      padding-bottom: 0.5cm;
      font-family: "Open Sans";
      font-size: 6pt;
      line-height: 1.3;
      color:grey;
    }
  }
}
</style>