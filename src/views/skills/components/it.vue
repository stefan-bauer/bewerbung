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
        <div class="test-container">
          <div
            class="test-items"
            v-for="(item, idx) in type.Content"
            :key="idx"
            :class="{ 'full-flexing': type.Type != 'inline' }"
          >
            <!-- mit beschreibung und ohne html -->
            <div
              class="test-item"
              v-if="
                item.description != null &&
                !checkHtml(item.description) &&
                !checkHtml(item.title)
              "
            >
              {{ conTitDes(item.title, item.description) }}
            </div>
            <!-- mit beschreibung und mind ein html -->
            <div
              class="test-item"
              v-if="
                item.description != null &&
                (checkHtml(item.description) || checkHtml(item.title))
              "
              v-html="conTitDes(item.title, item.description)"
            ></div>

            <!-- ohne  beschreibung und ohne html -->
            <div class="test-item" v-if="item.description == null">
              {{ item.title }}
            </div>
            <!-- the ending -->
            <div
              class="test-itemending"
              v-if="type.Type == 'inline' && type.Content.length != idx + 1"
            >
              ,
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- -------- SPRACHE ------------- -->
    <inner-header>
      <template v-slot:header> {{ $t("Skills.Lang.Header") }} </template>
    </inner-header>
    <div class="lang-content">
      <div class="lang-container">
        <div
          class="lang-items"
          v-for="(item, idx) in $t('Skills.Lang.Items')"
          :key="idx"
          :class="{ 'full-flexing': $t('Skills.Lang.Type') == 'inline' }"
        >
          <!-- mit beschreibung und ohne html -->
          <div
            class="lang-item"
            v-if="
              item.description != null &&
              !checkHtml(item.description) &&
              !checkHtml(item.title)
            "
          >
            {{ conTitDes(item.title, item.description) }}
          </div>
          <!-- mit beschreibung und mind ein html -->
          <div
            class="lang-item"
            v-if="
              item.description != null &&
              (checkHtml(item.description) || checkHtml(item.title))
            "
            v-html="conTitDes(item.title, item.description)"
          ></div>

          <!-- ohne  beschreibung und ohne html -->
          <div class="lang-item" v-if="item.description == null">
            {{ item.title }}
          </div>
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
</template>

<script>
import InnerHeader from "@/components/InnerHeader";

export default {
  name: "it",
  data() {
    return {
      connector: ` `,
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

    conTitDes(title, description) {
      return `${title}: ${description}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.it-content {
  background-color: lightseagreen;
  // flex: 1 1 100%;
  // //   display: flex;
  // flex-wrap: wrap;
  // margin-left: $margin-content-left;

  .it-types {
    background-color: lightpink;
    // flex: 1 1 100%;
    // display: flex;
    // flex: wrap;

    // -------------------------------------

    .test-container {
      background-color: bisque;
      display: flex;

      // ------
      flex: 1 1 100%;
      flex-wrap: wrap;
      // -----
      .test-items {
        background-color: rgb(196, 246, 255);
        margin-top: 0.05cm;
        margin-bottom: 0.05cm;
        display: flex;
        // flex:1 1 100%;
      }

      .test-item {
        background-color: rgb(224, 196, 255);
      }

      .test-itemending {
        background-color: rgb(255, 196, 237);
        margin-right: 4px;
        // content:',';
      }

      .full-flexing {
        background-color: rgb(251, 255, 196);

        flex: 1 1 100%;
      }
    }
}
    // ----------------------------------

    // .it-items-container {
    //   background-color: aqua;
    //   display: flex;
    //   flex-direction: row;
    //   flex-wrap: wrap;
    // }

    // .it-item {
    //   // flex: 1 1 auto;
    //   background-color: lightskyblue;
    //   margin: 0.1cm;
    // }

    // .auto-flex {
    //   flex: 1 1 auto;
    // }

    // .full-flex {
    //   background-color: yellow;
    //   flex: 1 1 100%;
    // }
  }

  .lang-content {
    background-color: lightgreen;
    display: flex;
      padding:0.1cm;

    // ------
    flex: 1 1 100%;
    flex-wrap: wrap;

    .lang-container {
      background-color: rgb(126, 126, 1);
      margin:0.1cm;
      display: flex;

      // ------
      flex: 1 1 100%;
      flex-wrap: wrap;

      .lang-items {
        margin-top: 0.05cm;
        margin-bottom: 0.05cm;
        display: flex;
        background-color: lightpink;

        .lang-item {
          background-color: lightgrey;
        }

        .lang-itemending {
          background-color: rgb(255, 196, 237);
          margin-right: 4px;
          // content:',';
        }
        .full-flexing {
          background-color: rgb(251, 255, 196);
          flex: 1 1 100%;
        }
      }
    }
  }

</style>