<template>
  <div class="innerheader">
    <div>
      <div class="spacer-top"></div>
      <h3>
        <slot name="header" />
      </h3>
      <div class="line"></div>
      <div class="spacer-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "innerheader",
  props: ["header"],
};
</script>

<style lang="scss" scoped>
.innerheader {
  // background-color: rgb(89, 63, 205);
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;
  margin-bottom: 0.15cm;
  // margin: 0 auto;
  h3 {
    // background-color: cyan;
    font-family: Raleway;
    font-weight: bold;
    font-size: 14pt;
    color: $color-default-header;
  }

  .line {
    background-color: $color-title-line;
    width: 100%;
    min-height: $line-hight-small;
    max-height: $line-hight-small;
    // margin: 0 auto;
    margin-top: 0.1cm;
    // margin-bottom: 0.25cm;
  }

  .spacer-top {
    // background-color: lightpink;
    width: 100%;
    height: 0.2cm;
  }
  .spacer-bottom {
    // background-color: lightgreen;
    width: 100%;
    height: 0.2cm;
  }
}
</style>
