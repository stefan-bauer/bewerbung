<template>
  <div>
    <inner-header>
      <template v-slot:header> {{ $t("Skills.Lang.Header") }} </template>
    </inner-header>
    <div class="lang-content">
      <div class="lang-container">
        <div
          class="lang-item"
          v-for="(item, idx) in $t('Skills.Lang.Items')"
          :key="idx"
          :class="{ 'full-flexing': $t('Skills.Lang.Type') != 'inline' }"
        >
          <!-- {{item.title}}: {{item.description}} -->

          <span class="langitem-title title">{{ item.title }}</span>
          <span class="langitem-connector" v-if="item.description != null"
            >:</span
          >
          <span
            class="langitem-description description"
            v-if="item.description != null"
            v-html="item.description"
          ></span>
          <!-- the ending -->
          <div
            class="lang-itemending"
            v-if="
              $t('Skills.Lang.Type') == 'inline' &&
              $t('Skills.Lang.Items').length != idx + 1
            "
          >
            ,
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- </div> -->
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import InnerHeader from "@/components/InnerHeader";

export default {
  name: "lang",
  data() {
    return {
      // connector: ` `,
      // connector:`${&nbsp;}`
    };
  },
  components: {
    InnerHeader,
  },
  methods: {
    checkHtml(text) {
      // console.log("in check html it");
      // console.log(text);
      let matchTag = /<(?:.|\s)*?>/g;
      let result = text.match(matchTag);
      // console.log(result);
      return result;
    },

    // checkInline(value) {
    //   console.log("checkinline");
    //   console.log(value);
    // },

    // conTitDes(title, description) {
    //   return `${title}: ${description}`;
    // },
  },
};
</script>

<style lang="scss" scoped>
.lang-content {
  // background-color: lightseagreen;
  margin-left: $margin-content-left;

  .lang-container {
    // background-color: rgb(164, 19, 184);
    display: flex;
    flex: 1 1 100%;
    flex-wrap: wrap;
    margin-left: $margin-inner-content-left;
    padding-bottom: 0.2cm;

    .lang-item {
      // background-color: rgb(196, 246, 255);
      display: flex;
      margin-top: 0.15cm;
    }

    .langitem-title {
      // background-color: rgb(196, 246, 255);
    }
    .langitem-connector {
      // background-color: rgb(51, 50, 58);
      margin-right: 4px;
    }
    .langitem-description {
      // background-color: rgb(2, 145, 170);
    }

    .lang-itemending {
      // background-color: rgb(255, 196, 237);
      margin-right: 4px;
    }

    .full-flexing {
      // background-color: rgb(251, 255, 196);
      flex: 1 1 100%;
    }
  }
}
</style>