<template>
  <div>
    <inner-header>
      <template v-slot:header> {{ $t("Cv.Profile.Header") }} </template>
    </inner-header>

    <div class="profile-content">
      <div class="birth-header">{{ $t("Cv.Profile.BirthHeader") }}:</div>
      <div class="birth-date">{{ $t("Cv.Profile.BirthDate") }}</div>
      <div class="profile-description">
        <div
          v-for="(value, key) in $t('Cv.Profile.descriptionContent')"
          :key="key"
        >
          <p v-if="!checkHtml(value)">{{ value }}</p>
          <p v-if="checkHtml(value)" v-html="value" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InnerHeader from "@/components/InnerHeader";

export default {
  name: "profile",
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

  .profile-content {
    background-color: lightseagreen;
    display: flex;
    flex-wrap: wrap;
    margin-left: $margin-content-left;
        flex:1 1 100%;


    .birth-header {
      // background-color: darkcyan;
      font-weight: bold;
      line-height: inherit;
    }

    .birth-date {
      // background-color: fuchsia;
      margin-left: 0.25cm;
    }

    .profile-description {
      // background-color: firebrick;
      padding-top: 0.1cm;
      width: 100%;
      text-align: left;
    }
  }
// }
</style>