
<template>
  <title-view >
    <template v-slot:header>James Bond</template>
    <template v-slot:title>Bewerbungsmappe</template>
  </title-view>
</template>

<script>
import titleView from "@/views/title/Index";
export default {
  name: "titleGerman",
  components: {
    titleView,
  },

};
</script>

<style lang="scss" scoped>
</style>
