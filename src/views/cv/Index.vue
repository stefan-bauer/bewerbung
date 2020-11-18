<template>
  <div class="content">
    <page-header>
      <template v-slot:header><slot name="header" /></template>
    </page-header>

    <div class="middle">
      <!-- PROFILE -->
      <div class="profile">
        <inner-header>
          <template v-slot:header> Profil </template>
        </inner-header>

        <div class="profile-content">
          <div class="birth-header"><slot name="birth-header" /></div>
          <div class="birth-date"><slot name="birth-date" /></div>
          <div class="profile-description">
            <slot name="profile-description" />
          </div>
        </div>
      </div>

      <!-- WORK -->
      <div class="work">
        <inner-header>
          <template v-slot:header> Arbeitserfahrung </template>
        </inner-header>

        <div class="work-content">
          <div class="work-item">
            <div class="work-header">
              <h4><slot name="work-header" /></h4>
            </div>
            <div class="work-date"><slot name="work-date" /></div>
            <div class="work-description"><slot name="work-description" /></div>
          </div>
        </div>
      </div>

      <!-- EDUCATION -->
      <div class="education">
        <inner-header>
          <template v-slot:header> Ausbildung </template>
        </inner-header>

        <div class="education-content">
          <div class="education-item">
            <!-- MSc -->
            <div class="education-header">
              <h4><slot name="education-header-MSc" /></h4>
            </div>
            <div class="education-date"><slot name="education-date-MSc" /></div>
            <div class="education-subheader">
              <slot name="education-subheader-MSc" />
            </div>
            <div class="education-description">
              <slot name="education-description-MSc" />
            </div>
          </div>

          <div class="education-item">
            <!-- BSc -->
            <div class="education-header">
              <h4><slot name="education-header-BSc" /></h4>
            </div>
            <div class="education-date"><slot name="education-date-BSc" /></div>
            <div class="education-subheader">
              <slot name="education-subheader-BSc" />
            </div>
            <div class="education-description">
              <slot name="education-description-BSc" />
            </div>
          </div>

          <div class="education-item">
            <!-- HTL -->
            <div class="education-header">
              <h4><slot name="education-header-HTL" /></h4>
            </div>
            <div class="education-date"><slot name="education-date-HTL" /></div>
            <div class="education-subheader">
              <slot name="education-subheader-HTL" />
            </div>
            <div class="education-description">
              <slot name="education-description-HTL" />
            </div>
          </div>
        </div>
      </div>

      <!-- PUBLICATED -->
      <div class="publicated">
        <inner-header>
          <template v-slot:header> Veröffentlichungen </template>
        </inner-header>

        <div class="publicated-content">
          <div class="publicated-type">Paper</div>
          <div class="publicated-item">
            <div class="publicated-header">
              <h4><slot name="publicated-header" /></h4>
            </div>
            <div class="publicated-date"><slot name="publicated-date" /></div>
            <div class="publicated-subheader">
              <slot name="publicated-subheader" />
            </div>
            <div class="publicated-author">
              <slot name="publicated-author" />
            </div>
          </div>
        </div>
      </div>

      <!-- Sonstiges -->
      <div class="other">
        <inner-header>
          <template v-slot:header> Sonstiges </template>
        </inner-header>

        <div class="other-content">
          <!-- Military -->
          <div class="other-item">
            <div class="other-header">
              <h4><slot name="other-header-military" /></h4>
            </div>
            <div class="other-date"><slot name="other-date-military" /></div>
            <div class="other-subheader">
              <slot name="other-subheader-military" />
            </div>
            <div class="other-description">
              <slot name="other-description-military" />
            </div>
          </div>

          <!-- welding -->
          <div class="other-item">
            <div class="other-header">
              <h4><slot name="other-header-welding" /></h4>
            </div>
            <div class="other-date"><slot name="other-date-welding" /></div>
            <div class="other-subheader">
              <slot name="other-subheader-welding" />
            </div>
            <div class="other-description">
              <slot name="other-description-welding" />
            </div>
          </div>

          <!-- driving -->
          <div class="other-item">
            <div class="other-header">
              <h4><slot name="other-header-driving" /></h4>
            </div>
            <div class="other-date"><slot name="other-date-driving" /></div>
            <div class="other-subheader">
              <slot name="other-subheader-driving" />
            </div>
            <div class="other-description">
              <slot name="other-description-driving" />
            </div>
          </div>

          <!-- sailing -->
          <div class="other-item">
            <div class="other-header">
              <h4><slot name="other-header-sailing" /></h4>
            </div>
            <div class="other-date"><slot name="other-date-sailing" /></div>
            <div class="other-subheader">
              <slot name="other-subheader-sailing" />
            </div>
            <div class="other-description">
              <slot name="other-description-sailing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InnerHeader from "./components/InnerHeader";
import PageHeader from "./components/PageHeader";
export default {
  components: {
    InnerHeader,
    PageHeader,
  },
};
</script>
<style lang="scss" scoped>
$margin-content-left: 0.25cm;
$margin-inner-content-left: 0.15cm;
$margin-group-bottom: 0.5cm;
$item-padding-bottom: 0.2cm;

.content {
  // background-color: blanchedalmond;

  h4 {
    // background-color: rgb(218, 24, 24);
    flex: 2 2 auto;
    // -webkit-flex: 2 2 auto;
    font-size: 10pt;
    font-weight: bold;
    color: $color-worktable-heading;
  }

  .middle {
    // background-color: brown;

    .profile {
      // background-color: aqua;
      margin-bottom: $margin-group-bottom;

      .profile-content {
        // background-color: coral;
        display: flex;
        flex-wrap: wrap;
        // TODO: Ueberprüfen
        margin-left: $margin-content-left;
        // margin-left: $margin-content-left-lv1;

        .birth-header {
          // background-color: darkcyan;
          font-weight: bold;
          line-height: inherit;
        }

        .birth-date {
          // background-color: fuchsia;
          margin-left: 0.25cm;
        }

        .profile-description {
          // background-color: firebrick;
          padding-top: 0.1cm;
          width: 100%;
          text-align: left;
        }
      }
    }

    .work {
      // background-color: darkolivegreen;
      margin-bottom: $margin-group-bottom;

      .work-content {
        // background-color: rgb(9, 112, 119);

        .work-item {
          // background-color: coral;
          display: flex;
          flex-wrap: wrap;
          // TODO: Ueberprüfen
          margin-left: $margin-content-left;
          padding-bottom: $item-padding-bottom;

          // margin-left: $margin-content-left-lv1;

          .work-header {
            // background-color: darkcyan;

          }

          .work-date {
            // background-color: fuchsia;
            flex: 1 1 auto;
            font-size: 9pt;
            color: $color-worktable-date;
            text-align: right;
          }

          .work-description {
            // background-color: rgb(0, 26, 255);
            margin-left: $margin-inner-content-left;
            width: 100%;
            // margin-left: $innercontent-margin-left;
            font-size: 10pt;
          }
        }
      }
    }

    .education {
      // background-color: aliceblue;
      margin-bottom: $margin-group-bottom;
      .education-content {
        // background-color: rgb(41, 8, 160);

        .education-item {
          // background-color: coral;
          display: flex;
          flex-wrap: wrap;
          // TODO: Ueberprüfen
          margin-left: $margin-content-left;
          padding-bottom: $item-padding-bottom;

          // margin-left: $margin-content-left-lv1;

          .education-header {
            // background-color: darkcyan;
          }

          .education-subheader {
            // background-color: rgb(102, 67, 148);
                width: 100%;
    font-size: 9pt;
    font-style: italic;
    color: $color-worktable-subheading;
          }

          .education-date {
            // background-color: fuchsia;
            flex: 1 1 auto;
            // -webkit-flex: 1 1 auto;
            font-size: 9pt;
            color: $color-worktable-date;
            text-align: right;
          }

          .education-description {
            // background-color: rgb(0, 26, 255);
            margin-left: $margin-inner-content-left;
            width: 100%;
            // margin-left: $innercontent-margin-left;
            font-size: 10pt;
          }
        }
      }
    }

    .publicated {
      // background-color: cadetblue;
      margin-bottom: $margin-group-bottom;

      .publicated-content {
        // background-color: rgb(9, 112, 119);

        .publicated-type {
          // background-color: rgb(70, 9, 119);
          margin-left: $margin-content-left;
        }

        .publicated-item {
          // background-color: coral;
          display: flex;
          flex-wrap: wrap;
          // TODO: Ueberprüfen
          margin-left: $margin-content-left;
          padding-bottom: $item-padding-bottom;

          // margin-left: $margin-content-left-lv1;

          .publicated-header {
            // background-color: darkcyan;
          }

          .publicated-date {
            // background-color: fuchsia;
            flex: 1 1 auto;
            font-size: 9pt;
            color: $color-worktable-date;
            text-align: right;
          }

          .publicated-subheader {
            // background-color: rgb(0, 26, 255);
            margin-left: $margin-inner-content-left;

            width: 100%;
            // margin-left: $innercontent-margin-left;
            font-size: 10pt;
          }

          .publicated-author {
            // background-color: rgb(0, 26, 255);
            margin-left: $margin-inner-content-left;

            width: 100%;
            // margin-left: $innercontent-margin-left;
            font-size: 10pt;
          }
        }
      }
    }

    .other {
      // background-color: darkolivegreen;
      margin-bottom: $margin-group-bottom;

      .other-content {
        // background-color: rgb(9, 112, 119);

        .other-item {
          // background-color: coral;
          display: flex;
          flex-wrap: wrap;
          // TODO: Ueberprüfen
          margin-left: $margin-content-left;
          padding-bottom: $item-padding-bottom;
          // margin-left: $margin-content-left-lv1;

          .other-header {
            // background-color: darkcyan;
          }

          .other-date {
            // background-color: fuchsia;
            flex: 1 1 auto;
            font-size: 9pt;
            color: $color-worktable-date;
            text-align: right;
          }

          .other-description {
            // background-color: rgb(0, 26, 255);
            width: 100%;
            // margin-left: $innercontent-margin-left;
            font-size: 10pt;
            margin-left: $margin-inner-content-left;
          }
        }
      }
    }
  }
}
</style>
