<template>
  <div class="content">
    <page-header>
      <template v-slot:header><slot name="header" /></template>
      <template v-slot:subheader> <slot name="subheader" /> </template>
    </page-header>

    <div class="middle">
      <div class="images">
              <img
        :src="img.source"
        :alt="img.alt"
        class="diplom-image"
        @error="setAltImg"
      />
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import PageHeader from "./components/Header";
export default {
  name: "diplom_content",
  components: {
    PageHeader,
  },
  props:['img'],
    data () {
    return {
    }
  },
    methods: {
    setAltImg(event) {
      console.log("set Alt is coalled");
      event.target.src = "images/default/defualt_certification.png";
    },
  },

};
</script>
<style lang="scss" scoped>
.content {
  // background-color: rgba(71, 207, 8, 0.726);
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  .middle {
    // background-color: green;
    flex-basis: inherit;

    .images {
      display: block;
      // background-color: rgb(91, 218, 32);
      text-align: center;

      .diplom-image {
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
