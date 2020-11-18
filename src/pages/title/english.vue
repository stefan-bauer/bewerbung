
<template>
  <title-view >
    <template v-slot:header>James Bond</template>
    <template v-slot:title>Resume</template>
  </title-view>
</template>

<script>
import titleView from "@/views/title/Index";
export default {
  name: "titleEnglish",
  components: {
    titleView,
  },

};
</script>

<style lang="scss" scoped>
</style>
