<template>
  <div class="header-container">
    <div class="spacer spacer-top"></div>
    <div class="header-and-line">
      <div class="header">
        <slot name="header" />
      </div>
      <div class="line"></div>
    </div>

    <div
      class="subheader-hiddentitle"
      v-if="subheader.active && subheader.hiddentitle"
    >
      <h1 v-if="subheader.hiddentitle">
        <slot name="subheader" />
      </h1>
    </div>
    <div class="subheader" v-if="subheader.active && !subheader.hiddentitle">
      <slot name="subheader" />
    </div>

    <div class="spacer spacer-bottom"></div>
  </div>
</template>
<script>
export default {
  name: "myheader",
  props: ["subheader"],
};
</script>

<style lang="scss" scoped>

$color-title-line:$gray-middle;

$heigt-spacer-top: 1cm;
// $heigt-spacer-top: .75cm;
$heigt-spacer-bottom: 0.25cm;

h2 {
  // background-color: cyan;
  font-family: Raleway;
  font-weight: bold;
  font-size: 28pt;
  color: $color-title;
}


h1 {
  font-size: 1pt;
  color: transparent;
}

.header-container {
  // background-color: rgb(1, 54, 52);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .spacer {
    // background-color: rgb(240, 127, 255);
    width: 100%;
    height: 0.25cm;

    &-top {
      // background-color: rgb(127, 255, 155);
      height: $heigt-spacer-top;
    }
    &-bottom {
      // background-color: rgb(241, 109, 91);
      height: $heigt-spacer-bottom;
    }
  }

  .header-and-line {
    // background-color: rgb(223, 153, 1);
    

    .header {
        // background-color: rgb(195, 0, 255);
      font-family: Raleway;
      font-weight: bold;
      font-size: 28pt;
      color: $color-title;
    }

    .line {
      background-color: $color-title-line;
      width: 75%;
      min-height: $line-hight-small;
      max-height: $line-hight-small;
      margin:0 auto;
      margin-top: 0.25cm;
    }
  }

  .subheader {
    // background-color: rgb(59, 79, 192);
    flex: 0 0  100%;
    text-align: center;
    margin-top: 0.25cm;
    font-family: Raleway;
    font-size: 14pt;
    color: $color-subtitle;

  }
  .subheader-hiddentitle {
    // background-color: rgb(59, 79, 192);
    flex: 0 0 100%;
    text-align: center;
  }
}
</style>