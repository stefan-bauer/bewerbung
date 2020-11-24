<template>
  <div>
    <inner-header>
      <template v-slot:header> {{ $t("Skills.It.Header") }} </template>
    </inner-header>
    <div class="it-content">
      <div
        class="it-types"
        v-for="(type, outeridx) in $t('Skills.It.Items')"
        :key="outeridx"
      >
        <div class="it-types--header">
          <h4>{{ type.Header }}</h4>
        </div>
        <div class="it-container">
          <div
            class="it-item"
            v-for="(item, idx) in type.Content"
            :key="idx"
            :class="{ 'full-flexing': type.Type != 'inline' }"
          >
            <!-- {{item.title}}: {{item.description}} -->

            <span class="ititem-title title">{{ item.title }}</span>
            <span class="ititem-connector" v-if="item.description != null"
              >:</span
            >
            <span
              class="ititem-description description"
              v-if="item.description != null"
              v-html="item.description"
            ></span>
            <!-- the ending -->
            <div
              class="it-itemending"
              v-if="type.Type == 'inline' && type.Content.length != idx + 1"
            >
              ,
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import InnerHeader from "@/components/InnerHeader";

export default {
  name: "it",
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
.it-content {
  // background-color: lightseagreen;
  margin-left: $margin-content-left;

  .it-types {
    // background-color: lightpink;

    .it-container {
      // background-color: rgb(164, 19, 184);
      display: flex;
      flex: 1 1 100%;
      flex-wrap: wrap;
      margin-left: $margin-inner-content-left;
      padding-bottom: 0.2cm;
      padding-bottom: 0.75cm;

      .it-item {
        // background-color: rgb(196, 246, 255);
        margin-top: 0.15cm;
        // margin-bottom: 0.15cm;
        display: flex;
      }

      .ititem-title {
        // background-color: rgb(196, 246, 255);
      }
      .ititem-connector {
        // background-color: rgb(51, 50, 58);
        margin-right: 4px;
      }
      .ititem-description {
        // background-color: rgb(2, 145, 170);
      }

      .it-itemending {
        // background-color: rgb(255, 196, 237);
        margin-right: 4px;
      }

      .full-flexing {
        // background-color: rgb(251, 255, 196);
        flex: 1 1 100%;
      }
    }
  }
}
</style>