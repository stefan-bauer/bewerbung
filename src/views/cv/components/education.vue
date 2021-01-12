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
  // background-color: lightseagreen;
  display: flex;
  flex-wrap: wrap;
  margin-left: $margin-content-left;

  .education-items {
    // background-color: lightpink;
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 100%;


    .education-item {
      // background-color: limegreen;
      flex: 0 0 100%;
      flex-wrap: wrap;
      display: flex;

      margin-bottom: 0.3cm;

      .education-header {
        // background-color: rgb(90, 80, 238);
        flex: 1 0 50%;
      }

      .education-subheader {
        // background-color: rgb(90, 80, 238);
        flex: 0 0 100%;
      }

      .education-date {
        // background-color: rgb(129, 129, 5);
        font-size: 8pt;
        font-style:italic;
        color: $color-worktable-date;
        text-align: right;

      }

      .education-description {
        // background-color: rgb(0, 26, 255);
        flex: 0 0 100%;
        padding-left: $margin-inner-content-left;
        font-size: 9pt;
      }
    }
  }
}
</style>