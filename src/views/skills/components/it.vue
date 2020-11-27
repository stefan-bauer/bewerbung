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
          <span
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
            <!-- <span -->
              <!-- class="ititem-description description" -->
              <!-- v-if="item.description != null" -->
              <!-- v-html="item.description" -->
            <!-- ></span> -->
            <!-- the ending -->
            <span
              class="it-itemending"
              v-if="type.Type == 'inline' && type.Content.length != idx + 1"
            >,</span>
            <!-- <span -->
              <!-- class="ititem-connector" -->
              <!-- v-if="type.Type == 'inline' && type.Content.length != idx + 1" -->
            <!-- >bla bla bla</span> -->
          </span>
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
      let matchTag = /<(?:.|\s)*?>/g;
      let result = text.match(matchTag);
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.it-content {
  // background-color: rgb(245, 125, 78);
  display: flex;
  flex-wrap: wrap;
  margin-left: $margin-content-left;
  flex: 0 0 100%;

  .it-types {
    // background-color: lightpink;
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 100%;
    margin-bottom: 0.2cm;

    .it-container {
      background-color: rgb(164, 19, 184);
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 100%;
      padding-left: $margin-inner-content-left;
      margin-bottom:0.5cm; /* kann gelöscht werden */
      // padding-bottom: 0.2cm;
      // padding-bottom: 0.75cm;

      .it-item {
        background-color: rgb(5, 171, 201);
        margin-top: 0.15cm;
        display: inline-block;
        // flex-wrap:wrap;
        // flex:0 0;
        // flex-wrap: wrap;
      }

      .ititem-title {
        background-color: rgb(196, 246, 255);
        display:inline-block;
        // flex: 0 0 auto;
      }
      .ititem-connector {
        background-color: rgb(51, 50, 58);
        padding-right: 4px;
        // flex: 0 0 auto;
        display:inline-block;
      }

      .ititem-description {
        background-color: rgb(2, 145, 170);
        // flex: 0 0 auto;
        display:inline-block;
      }

      .it-itemending {
        background-color: rgb(255, 196, 237);
        padding-right: 4px;
        display:inline-block;
        // flex: 1 0 auto;
      }

      .full-flexing {
        // background-color: rgb(251, 255, 196);
        flex: 0 0 100%;
      }
    }
  }
}
</style>