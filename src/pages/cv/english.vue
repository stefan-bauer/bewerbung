<template>
  <div class="content">
    <page-header>
      <template v-slot:header><h2 id="cv">Lebenslauf</h2></template>
    </page-header>

    <div class="middle">
      <!-- PROFILE -->
      <div class="profile">
        <inner-header>
          <template v-slot:header>
            Profil
          </template>
        </inner-header>

        <profile-content>
          <template v-slot:birthtitle>
            Geburtsdatum
          </template>
          <template v-slot:date>
            18.12.1985
          </template>
          <template v-slot:description>
            Ich stelle mich gerne neuen Herausforderungen und kann auch schon
            mal einen anderen Blickwinkel auf eine Aufgabe aufzeigen.
            Wissbegierde und lösungsorientiertes Denken gehören zu meinen
            Stärken.
          </template>
        </profile-content>
      </div>
    </div>
</div>
</template>
<script>
export default {
    name:"germanCv"
    
}
</script>
<style lang="scss" scoped>

</style>
