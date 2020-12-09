<template>
  <div class="content">
    <page-header class="page-header" :subheader="subheader">
      <template v-slot:header><slot name="header" /></template>
      <template v-slot:subheader> <slot name="subheader" /> </template>
    </page-header>

    <div class="middle">
      <div class="images">
        <div class="image-Front">
          <img :src="imgFront.source" :alt="imgFront.alt" @error="setAltImg" />
        </div>

        <div class="image-Back">
          <img :src="imgBack.source" :alt="imgBack.alt" @error="setAltImg" />
        </div>
      </div>
    </div>

    <div class="footer"></div>
  </div>
</template>

<script>
import PageHeader from "@/components/Header";
export default {
  name: "certificationDoubleStyle",
  data() {
    return {
      subheader: {
        hiddentitle: false,
        active: true,
      },
    };
  },
  components: {
    PageHeader,
  },
  props: ["imgFront", "imgBack", "imgDefault"],
  methods: {
    setAltImg(event) {
      event.target.src = this.imgDefault.source;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  // background-color: rgba(71, 207, 8, 0.726);
  display: flex;
  flex-wrap: wrap;
  flex-basis: inherit;
  align-content: flex-start;

  .page-header {
    // background-color: rgba(71, 207, 8, 0.726);
    padding-top: 1cm;
  }

  .middle {
    // background-color: rgb(0, 34, 128);
    flex-basis: inherit;
    padding-top: 0.5cm;

    .images {
      // background-color: rgb(91, 218, 32);
      display: block;
      position: relative;
      top: 0cm;
      left: 0cm;
      width: inherit;

      .image-Front {
        position: absolute;
        top: 0;
        left: 0.5cm;
        width: 80%;
        z-index: 1;

        img {
          width: 101%;
          border: 4px solid $color-image-boarder;
        }
      }

      .image-Back {
        position: absolute;
        width: 80%;
        z-index: 2;
        transform: translateX(2cm) translateY(8.25cm);

        img {
          width: 101%;
          border: 4px solid $color-image-boarder;
        }
      }
    }
  }

  .footer {
    // background-color: blueviolet;
    margin-bottom: 2cm;
    flex-basis: inherit;

    .table_of_content {
      margin-left: 1cm;
      .heading {
        font-family: Lato;
        font-size: 14pt;
        font-weight: bold;
        color: $color-default-header;
      }

      .line {
        margin-top: 15px;
        min-height: 2px;
        max-height: 2px;
        width: 25%;
        background-color: $color-default-line;
      }

      .table {
      }
    }
  }
}
</style>
