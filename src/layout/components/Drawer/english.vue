<template>
  <drawer-layout>
    <template v-slot:nametitle>
Sir
    </template>
    <template v-slot:firstname>
      James
    </template>
    <template v-slot:sirname>
      Bond
    </template>
    <template v-slot:contactheading>
      Contact
    </template>
    <template v-slot:address>
     London
    </template>
    <template v-slot:mail>
      jamesbond@007.com
    </template>
    <template v-slot:phone>
      xxxx/ 323 2233
    </template>
    <template v-slot:linkedin>
      /in/jamesbond
    </template>
  </drawer-layout>
</template>

<script>
import DrawerLayout from "./Index";
export default {
  name: "Drawer",
  components: {
    DrawerLayout
  }
};
</script>

<style lang="scss" scoped></style>
