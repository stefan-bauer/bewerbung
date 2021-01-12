<template>
  <div>
    <inner-header class="innerheader">
      <template v-slot:header> {{ $t("Cv.Other.Header") }} </template>
    </inner-header>

    <div class="other-content">
      <div
        class="other-items"
        v-for="(item, idx) in $t('Cv.Other.Items')"
        :key="idx"
      >
        <div class="other-item">
          <div class="other-header">
            <h5>{{ item.Header }}</h5>
          </div>
          <div class="other-date" v-if="item.DateStart">
            {{ item.DateStart }}–{{ item.DateEnd }}
          </div>
          <div class="other-description">
            {{ item.Description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InnerHeader from "@/components/InnerHeader";

export default {
  name: "other",
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
.innerheader {
  // background-color: rgb(193, 63, 205);
}
.other-content {
  // background-color: lightseagreen;
  display: flex;
  flex-wrap: wrap;
  margin-left: $margin-content-left;

  .other-items {
    // background-color: lightpink;
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 100%;

    .other-item {
      // background-color: lightpink;
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 100%;

      margin-bottom: 0.3cm;

      .other-header {
        // background-color: rgb(90, 80, 238);
        flex: 1 0 70%;
      }

      .other-date {
        // background-color: rgb(129, 129, 5);
        font-size: 8pt;
        font-style:italic;
        color: $color-worktable-date;
        text-align: right;
      }
      .other-description {
        // background-color: rgb(0, 26, 255);
        flex: 0 0 100%;
        padding-left: $margin-inner-content-left;
        font-size: 10pt;
      }
    }
  }
}
</style>