<template>
  <div>
    <inner-header>
      <template v-slot:header> {{ $t("Cv.Publicated.Header") }} </template>
    </inner-header>

    <div class="publicated-content">
      <div
        class="publicated-types"
        v-for="(type, outeridx) in $t('Cv.Publicated.Types')"
        :key="outeridx"
      >
        <div class="publicated-type"><h4>{{ type.Header }}</h4></div>
        <div
          class="publicated-items"
          v-for="(item, idx) in type.Items"
          :key="idx"
        >
          <div class="publicated-item">
            <div class="publicated-header">
              <h5>{{ item.Header }}</h5>
            </div>
            <div class="publicated-date">{{ item.PublicatedDate }}</div>
            <div class="publicated-subheader">
              <p v-if="!checkHtml(item.SubHeader)">
                {{ item.SubHeader }}
              </p>
              <p v-if="checkHtml(item.SubHeader)" v-html="item.SubHeader" />
            </div>
            <div class="publicated-author">
              {{ item.Authors }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InnerHeader from "@/components/InnerHeader";

export default {
  name: "publicated",
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


  .publicated-content {
    background-color: lightseagreen;

    .publicated-types {
      background-color: rgb(74, 55, 95);

      .publicated-type {
        background-color: rgb(55, 95, 92);
        padding-bottom: 0.2cm;
      }

      .publicated-items {
        background-color: rgb(74, 95, 55);
        display: flex;
        flex-wrap: wrap;
        flex-basis: inherit;
        margin-left: $margin-content-left;

        .publicated-item {
          background-color: rgb(95, 55, 78);
          flex: 1 1 100%;
          flex-wrap: wrap;
          display: flex;
          margin-bottom: 0.1cm;

          .publicated-header {
            background-color: rgb(55, 95, 92);
            flex: 1 1 80%;
          }

          .publicated-subheader {
            background-color: rgb(165, 115, 100);
          }

          .publicated-date {
            background-color: rgb(95, 55, 55);
          }

          .publicated-author {
            background-color: rgb(55, 58, 95);
          }
        }
      }
    }
  }

</style>