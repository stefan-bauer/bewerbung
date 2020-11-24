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

        <div class="it-items-container">
          <!-- <div class="it-items" v-for="(item, idx) in type.Content" :key="idx" :class="{'full-flex':type.Type!='inline'}"> -->
          <!-- <div class="it-item it-item--titleanddescription-green" v-if="item.description!=null && (!checkHtml(item.description) && !checkHtml(item.title) )"> -->
          <!-- {{conTitDes(item.title,item.description)}} -->
          <!-- </div> -->
          <!-- <div class=" it-item it-item--titleanddescription-red" v-if="item.description!=null && (checkHtml(item.description) || checkHtml(item.title) )" v-html="conTitDes(item.title,item.description)"></div> -->
          <!-- <div class=" it-item it-item--titleanddescription-yellow" v-if="item.description==null"> -->
          <!-- {{item.title}} -->
          <!-- </div> -->
          <!-- <div class=" it-item it-item--ending auto-flex" v-if="idx+1!=type.Content.length && type.Type=='inline'">, </div>             -->
          <!-- </div> -->
        </div>
        <div class="test-container">
          <div
            class="test-items"
            v-for="(item, idx) in type.Content"
            :key="idx"
            :class="{ 'full-flexing': type.Type != 'inline' }"
          >
            <!-- <div class="test-item ">
              {{ item.title }}
            </div> -->
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
            <div
              class="test-item"
              v-if="item.description == null"
            >
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
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import InnerHeader from "@/components/InnerHeader";

export default {
  name: "it",
  data(){
    return{
      connector:` `
      // connector:`${&nbsp;}`
    }
  },
  components: {
    InnerHeader,
  },
  methods: {
    checkHtml(text) {
      console.log("in check html it");
      console.log(text);
      let matchTag = /<(?:.|\s)*?>/g;
      let result = text.match(matchTag);
      console.log(result);
      return result;
    },

    checkInline(value) {
      console.log("checkinline");
      console.log(value);
    },

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

      .test-itemending{
        background-color: rgb(255, 196, 237);
        margin-right: 4px;
        // content:',';
      }

      .full-flexing {
        background-color: rgb(251, 255, 196);

        flex: 1 1 100%;
      }
    }

    // ----------------------------------

    .it-items-container {
      background-color: aqua;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .it-item {
      // flex: 1 1 auto;
      background-color: lightskyblue;
      margin: 0.1cm;
    }

    .auto-flex {
      flex: 1 1 auto;
    }

    .full-flex {
      background-color: yellow;
      flex: 1 1 100%;
    }

    // .it-types--header {
    //   background-color: lightcyan;
    //   text-transform: uppercase;
    // }

    // .it-items {
    //   background-color: rgb(36, 68, 68);
    //   text-transform: initial;
    //   display: flex;
    //   flex-wrap:wrap;

    //   .flexing{
    //   background-color: rgb(130, 148, 148) ;
    //     display:flex;
    //     flex:1 1 auto;
    //   }

    //   .it-item--ending{
    //     background-color:purple;
    //   }
    //   .it-item--titleanddescription {
    //     background-color: azure;
    //     flex:1 1 auto;

    //     &-green {
    //       background-color: green;
    //     }
    //     &-red {
    //       background-color: red;
    //     }
    //     &-yellow {
    //       background-color: yellow;
    //     }
    //   }

    //   //   flex:1 1 auto;

    //   //   display: inline-block;

    //   //    .it-item-inline{
    //   //         background-color: rgb(188, 207, 17) !important;
    //   //         display: inline-block !important;
    //   //     }

    //   .it-item {
    //     background-color: rgb(43, 68, 36);
    //     flex: 1 1 auto;

    //     &--inline {
    //       background-color: rgb(63, 36, 68);
    //     }

    //     &--title {
    //       background-color: rgb(60, 209, 197);
    //     }

    //     &--description {
    //       background-color: rgb(209, 82, 60);
    //       font-style: italic;
    //     }
    //   }
    // }
  }
}
</style>