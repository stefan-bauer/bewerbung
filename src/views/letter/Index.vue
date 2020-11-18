<template>
  <div class="container">
    <page-header>
      <template v-slot:header><slot name="name" /></template>
      <template v-slot:hiddentitle><slot name="hiddentitle" /></template>
    </page-header>
    <div class="middle">
      <div class="date">
        <slot name="date" />
      </div>
      <div class="subject">
        <slot name="subject" />
      </div>
      <div class="salutation">
        <slot name="salutation" />
      </div>
      <div class="letter">
        <slot name="letter" />
      </div>

      <div class="letter-ending">
        <slot name="ending" />
        <div class="signing-name">
        <slot name="signing" />

        </div>
        <div class="signing">
          <img
            :src="source"
            @error="setAltImg"
            alt="Signing"
            class="signing-image"
          />
        </div>
      </div>
    </div>
    <div class="footer"></div>
    <!-- </div>
    </div> -->

    <!-- <slot name="name" /> -->
  </div>
</template>

<script>
import PageHeader from "./components/Header";
export default {
  name: "letterLayout",
  data() {
    return {
      source: "images/persona/persona_sign.svg",
    };
  },
  components: {
    PageHeader,
  },
  methods: {
    setAltImg(event) {
      console.log("set Alt is coalled");
      event.target.src = "images/default/default_sign.svg";
    },
  },
};
</script>

<style lang="scss" scoped>

.container {
  // background-color: aquamarine;
  display: flex;
  flex-wrap: wrap;
  flex-basis: inherit;
  // justify-content: space-around;
  align-content: space-between;

  .middle {
    // background-color: orange;
    .date {
      // background-color: red;
      flex: 1 1 100%;
      font-family: Open Sans;
      font-size: 10pt;
      color: black;
      font-weight: bold;
      margin-bottom: 0.5cm;
    }

    .subject {
      // background-color: rgb(255, 127, 217);
      flex: 1 1 100%;

      font-family: Carlito;
      font-size: 10pt;
      color: black;
      // font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 1.5cm;
    }
    .salutation{
      // background-color: rgb(173, 247, 179);
      margin-bottom: 0.75cm;
      flex: 1 1 100%;

      font-family: Carlito;
      font-size: 10pt;
      color: black;
      font-weight: bold;
    }

     .letter {
      // background-color: rgb(244, 127, 255);
      font-family: Carlito;
      flex: 1 1 100%;

      font-size: 11pt;
      line-height: 1.3;
      // color: black;
      // font-weight: bold;

      p {
        // background-color: rgb(244, 127, 255);
        margin-bottom: 0.5cm;
        flex: 1 1 100%;
        color:red;
      }

      // p:last-child {
      //   // margin-bottom: 0.5cm;
      //   background-color:yellowgreen;
      //   font-family: Carlito;
      //   font-size: 11pt;
      //   // color: black;
      //   // font-weight: bold;
      //   margin-bottom: 1cm;
      // }
    }

    .letter-ending {
      // background-color: lightseagreen;
      flex: 1 1 100%;

      p {
        background-color: rgb(127, 219, 255);
        margin-top: 1cm;
        margin-bottom: 0.5cm;
        font-family: Carlito;
        font-size: 10pt;
        color: black;
        font-weight: bold;
        flex: 1 1 100%;
      }

      .signing-name {
        // background-color: lightcoral;
        flex: 1 1 100%;
        margin-bottom: 0.5cm;
      }

      .signing-image {
        // background-color: brown;
        width: 30%;
        color: white;
        flex: 1 1 100%;
        margin-left: 0.25cm;
      }
    }
  }
    .footer {
    // background-color: burlywood;
    height: 0.2cm;
    flex: 1 1 100%;
  }
}
</style>