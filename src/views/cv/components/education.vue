<template>
  <div>
    <inner-header>
      <template v-slot:header> {{ $t("Cv.Education.Header") }} </template>
    </inner-header>
    <div class="education-content">
      <div
        class="education-items"
        v-for="(item, idx) in $t('Cv.Education.Items')"
        :key="idx"
      >
        <div class="education-item">
          <div class="education-header">
            <h5>{{ item.Header }}</h5>
          </div>
          <div class="education-date">
            {{ $t("Cv.Education.EndingHeader") }}: {{ item.DateEnd }}
          </div>
          <div class="education-subheader">
            {{ item.SubHeader }}
          </div>
          <div class="education-description" v-if="item.Description">
            <p v-if="!checkHtml(item.Description)">
              {{ item.Description }}
            </p>
            <p v-if="checkHtml(item.Description)" v-html="item.Description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InnerHeader from "@/components/InnerHeader";

export default {
  name: "education",
  components: {
    InnerHeader,
  },
  methods: {
    checkHtml(text) {
      let matchTag = /<(?:.|\s)*?>/g;
      let result = text.match(matchTag);
      console.log(result);
      return result;
    },
  },
};
</script>
<style lang="scss" scoped>
      .education-content {
        background-color: lightseagreen;
        display: flex;
        flex-wrap: wrap;
        flex-basis: inherit;
        margin-left: $margin-content-left;

        .education-items {
          display: flex;
          flex-wrap: wrap;
          // flex-basis: inherit;
          flex: 1 1 100%;

          background-color: lightpink;

          .education-item {
            // flex-basis: inherit;
            display: flex;
            flex-wrap: wrap;
            flex: 1 1 100%;

            background-color: limegreen;
            padding-bottom: 0.1cm;

            .education-header {
              background-color: rgb(90, 80, 238);
            }

            .education-subheader {
              background-color: rgb(90, 80, 238);
              flex: 1 1 100%;
            }

            .education-date {
              background-color: rgb(129, 129, 5);

              flex: 1 1 50%;
              // -webkit-flex: 1 1 auto;
              font-size: 9pt;
              color: $color-worktable-date;
              text-align: right;
            }
            .education-description {
              background-color: rgb(0, 26, 255);
              margin-left: $margin-inner-content-left;
              // width: 100%;
              flex: 1 1 100%;
              // margin-left: $innercontent-margin-left;
              font-size: 10pt;
            }
          }
        }
      }
</style>