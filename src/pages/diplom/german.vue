<template>
  <certification-view :img="img">
    <template v-slot:header><h2 id="diplom">Zertifizierung</h2></template>
    <template v-slot:subheader>MI6 </template>

  </certification-view>
</template>

<script>
import certificationView from "@/views/certification/Index";
export default {
  name: "diplomGerman",

  data() {
    return {
      img:{
        source:'images/persona/zeugnisse/Diplom.jpg',
        alt:'Diplom'
      }
    }
  },

  components: {
    certificationView,
  },

};
</script>

<style lang="scss" scoped>
</style>
