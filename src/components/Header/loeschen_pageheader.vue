<template>
  <div class="header">
    <div class="spacer"></div>
    <slot name="name" />
    <div class="line"></div>
    <div class="subheader"><slot name="hiddentitle" /></div>
    <div class="spacer-bottom"></div>
  </div>
</template>

<script>
export default {
  name: "pageheader"
};
</script>

<style lang="scss" scoped>
.header {
  // background-color: peru;
  text-align: center;
  margin: 0 auto;

  .spacer {
    // background-color: red;
    width: 100%;
    height: 1cm;
  }

  h2 {
    // background-color: cyan;
    font-family: Raleway;
    font-weight: bold;
    font-size: 28pt;
    // color: $color-title;
    color: red;
  }

  .line {
    // background-color: $color-title-line;
    background-color: red;
    width: 75%;
    // min-height: $line-hight-small;
    // max-height: $line-hight-small;
    min-height: 1cm;
    max-height: 1cm;
    margin: 0 auto;
    margin-top: 0.25cm;
  }

  .subheader {
    // background-color: cornflowerblue;

    margin-top: 0.25cm;
    font-family: Raleway;
    font-size: 14pt;
    // color: $color-subtitle;
    color: red;
  }

  .spacer-bottom {
    // background-color: burlywood;

    width: 100%;
    height: 0.5cm;
  }
}
</style>
