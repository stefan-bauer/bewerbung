<template>
  <div>
    <inner-header>
      <template v-slot:header> {{ $t("Cv.Work.Header") }} </template>
    </inner-header>
    <div class="work-content">
      <div
        class="work-items"
        v-for="(item, idx) in $t('Cv.Work.Items')"
        :key="idx"
      >
        <div class="work-item">
          <div class="work-header">
            <h5>{{ item.Header }}</h5>
          </div>
          <div class="work-date">{{ item.DateStart }} - {{ item.DateEnd }}</div>
          <div class="work-description" v-if="item.Description">
            <p v-if="!checkHtml(item.Description)">
              {{ item.Description }}
            </p>
            <p v-if="checkHtml(item.Description)" v-html="item.Description" />
          </div>
          <div class="work-description" v-else>
            <p style="color: red">FEHLENDE BESCHREIBUNG</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InnerHeader from "@/components/InnerHeader";

export default {
  name: "work",
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
.work-content {
  // background-color: lightseagreen;
  display: flex;
  flex-wrap: wrap;
  flex-basis: inherit;

  margin-left: $margin-content-left;

  .work-items {
    // background-color: lightpink;
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 100%;


    .work-item {
      // background-color: limegreen;
      flex: 0 0 100%;
      flex-wrap: wrap;
      display: flex;

      // padding-bottom: 0.1cm;/* not important, because there is only one item */

      .work-header {
        // background-color: rgb(107, 151, 107);
        flex: 1 0 50%;
      }

      .work-date {
        // background-color: rgb(106, 161, 165);
        text-align: right;
      }

      .work-description {
        // background-color: rgb(238, 154, 115);
        flex: 0 0 100%;
      }
    }
  }
}
</style>