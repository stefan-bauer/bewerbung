<template>
  <cv-view>
    <template v-slot:header><h2 id="cv">Lebenslauf</h2></template>

    <!-- PROFILE -->
    <template v-slot:birth-header>Geburtsdatum</template>
    <template v-slot:birth-date>xx.xx.xxxx</template>
    <template v-slot:profile-description>
From nailing the bad guys, to charming the ladies, James Bond always manages to come out on top
    </template>

    <!-- WORK -->
    <template v-slot:work-header> MI6 </template>
    <template v-slot:work-date> xxxx-xxxx </template>
    <template v-slot:work-description>
      A true gentleman
    </template>

    <!-- EDUCATION -->

    <!-- MSc -->
    <template v-slot:education-header-MSc>
      
    </template>
    <template v-slot:education-subheader-MSc>
University of Geneva
    </template>
    <template v-slot:education-date-MSc> Abschluss: Aug. xxxx </template>
    <template v-slot:education-description-MSc>

    </template>

    <!-- BSc -->
    <template v-slot:education-header-BSc>
      Eton
    </template>
    <template v-slot:education-subheader-BSc>
      Eton
    </template>
    <template v-slot:education-date-BSc> Abschluss: Nov. xxxx </template>
    <template v-slot:education-description-BSc> </template>

    <!-- HTL -->
    <template v-slot:education-header-HTL> University of Geneva </template>
    <template v-slot:education-subheader-HTL>
      University of Geneva
    </template>
    <template v-slot:education-date-HTL> Abschluss: Jun. xxxx </template>
    <template v-slot:education-description-HTL
      >So what to say to this</template
    >

    <!-- PUBLICATED -->
    <template v-slot:publicated-header>
      Proceedings Gentleman Book
    </template>
    <template v-slot:publicated-subheader>
A guid to be a gentleman in every situation
    </template>
    <template v-slot:publicated-date> 6 June xxxx </template>
    <template v-slot:publicated-author>
      James Bond
    </template>

    
    <!-- OTHER -->

    <!-- Military -->
    <template v-slot:other-header-military>
      Combat Training
    </template>
    <template v-slot:other-subheader-military>
    </template>
    <template v-slot:other-date-military>Sept xxxx - Mai xxxx</template>
    <template v-slot:other-description-military> closed</template>

    <!-- Welding -->
    <template v-slot:other-header-welding>
      Flirt Certification
    </template>
    <template v-slot:other-subheader-welding>
    </template>
    <template v-slot:other-date-welding> xx.xx.xxxx - xx.xx.xxxx</template>
    <template v-slot:other-description-welding> from dara </template>

    <!-- Driving -->
    <template v-slot:other-header-driving>
      Driving Licence
    </template>
    <template v-slot:other-subheader-driving>
    </template>
    <template v-slot:other-date-driving>
    </template>
    <template v-slot:other-description-driving>racing </template>

    <!-- sailing -->
    <template v-slot:other-header-sailing>
      Lifestyle
    </template>
    <template v-slot:other-subheader-sailing>
    </template>
    <template v-slot:other-date-sailing></template>
    <template v-slot:other-description-sailing> Booting Licence</template>

  </cv-view>
</template>
<script>
import cvView from "@/views/cv/Index";

export default {
  name: "germanCv",
  components: {
    cvView,
  },
};
</script>
<style lang="scss" scoped>
.underline {
  // text-decoration: underline;
  font-style: italic;
}
</style>
