<template>
  <div class="content">
    <page-header class="page-header" :subheader="subheader">
      <template v-slot:header><slot name="header" /></template>
      <template v-slot:subheader> <slot name="subheader" /> </template>
    </page-header>

    <div class="middle">
      <div class="images">
        <img
          :src="img.source"
          :alt="img.alt"
          class="certification-image"
          @error="setAltImg"
        />
      </div>
    </div>

    <div class="footer"></div>
  </div>
</template>

<script>
import PageHeader from "@/components/Header";
export default {
  name: "certificationStyle",
  components: {
    PageHeader,
  },
  props: ["img", "imgDefault"],
  data() {
    return {
      subheader: {
        hiddentitle: false,
        active: true,
      },
    };
  },
  methods: {
    setAltImg(event) {
      event.target.src = this.imgDefault.source;
    },
  },
};
</script>
<style lang="scss" scoped>
 $color-image-boarder: $blue-dark-2;
.content {
  // background-color: rgba(71, 207, 8, 0.726);
  flex: 0 0 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  line-height: 1.3;


  .header-container {
    // background-color: pink;
    flex: 0 0 100%;
  }
  
  .middle {
    // background-color: green;
    flex-basis: inherit;

    .images {
      // background-color: rgb(91, 218, 32);
      display: block;
      text-align: center;

      .certification-image {
        width: 100%;
        z-index: 1;
        border: 4px solid $color-image-boarder;
      }
    }
  }

  .footer {
    // background-color: rgb(218, 32, 72);
    height: 30px;
    width: 100%;
    min-height: 30px;
    max-height: 30px;
  }
}
</style>
