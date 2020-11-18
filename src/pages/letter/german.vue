<template>
  <letter-view>
    <template v-slot:name>James Bond</template>
    <template v-slot:hiddentitle>
      <h1 class="hiddentitle">Anschreiben</h1>
    </template>

    <template v-slot:date>01. November 2022</template>
    <template v-slot:subject>Re: 007 Joboffer</template>
    <template v-slot:salutation>Dear Mrs. M,</template>
    <template v-slot:letter>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <p>
        Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <p>
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <p>
        Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </p>
      <p>Nonumy eirmod tempor invidunt ut labore et</p>
    </template>
    <template v-slot:ending>with kindly regards,</template>
    <template v-slot:signing>James Bond</template>
  </letter-view>
</template>

<script>
import LetterView from "@/views/letter/Index";
export default {
  name: "letterEnglish",
  components: {
    LetterView,
  },
};
</script>

<style lang="scss" scoped>
</style>
