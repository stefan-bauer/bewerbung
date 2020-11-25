<template>
  <div class="drawer">
    <div class="header"></div>

    <div class="avatar">
      <img :src="source" @error="setAltImg" alt="Avatar" class="avatar-image" />
    </div>

    <div class="name">
      <span class="name-title">{{ $t("drawerUser.titleName") }} </span>
      <span class="name-first">{{ $t("drawerUser.firstName") }} </span>
      <span class="name-sir">{{ $t("drawerUser.sirName") }}</span>
    </div>

    <div class="contact-container">
      <div class="contact">
        <div class="contact-heading">{{ $t("drawer.contactHeading") }}</div>
        <div class="contact-line"></div>
      </div>

      <div class="address little_top_space flexrow">
        <div class="icon">
          <i class="fa fa-map-marker"></i>
        </div>
        <div class="content">
          <a :href="`https://goo.gl/maps/${$t('drawerUser.addressMaps')}`">
            <address>{{ $t("drawerUser.address") }}</address>
          </a>
        </div>
      </div>

      <div class="email little_top_space flexrow">
        <div class="icon">
          <i class="fa fa-envelope-o"></i>
        </div>
        <div class="content">
          <a :href="`mailto:${$t('drawerUser.mail')}`">
            {{ $t("drawerUser.mail") }}
          </a>
        </div>
      </div>

      <div class="phone little_top_space flexrow">
        <div class="icon">
          <i class="fa fa-phone"></i>
        </div>
        <div class="content">{{ $t("drawerUser.phone") }}</div>
      </div>

      <div class="linkedin little_top_space flexrow">
        <div class="icon">
          <i class="fa fa-linkedin"></i>
        </div>
        <div class="content">
          <a :href="`https://www.linkedin.com/in/${$t('drawerUser.linkedin')}`">
            {{ $t("drawerUser.linkedin") }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Drawerlayout",
  data() {
    return {
      source: `images/persona/${this.$t("drawerUser.avatarImg")}`,
    };
  },

  methods: {
    setAltImg(event) {
      event.target.src = `images/default/${this.$i18n.messages.default.drawerUser.avatarImg}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer {
  //   background-color: rgb(20, 117, 117);
  // line-height: 1.3;

  .header {
    //   background-color: rgb(20, 117, 117);

    // min-height: 3cm;
    // max-height: 3cm;
  }

  .avatar {
    //   background-color: rgb(20, 117, 117);

    // text-align: center;

    &-image {
      // border: 2px solid $color-drawer-avatarboarder;
      // border-radius: 100%;
      // width: 80%;
    }
  }

  .name {
    //   background-color: rgb(20, 117, 117);

    // margin-top: 0.5cm;
    // text-align: left;
    // color: $color-drawer-content;
    // font-family: Raleway;
    // font-size: 14pt;
    // font-weight: bold;
    // margin-left: 0.75cm;

    &-title {
    }
    &-first {
    }
    &-sir {
      // text-transform: uppercase;
    }
  }

  .contact-container {
    // background-color: rgb(20, 117, 117);

    // margin: 1.5cm 0 0 0.75cm;

    .flexrow {
      // display: flex;
    }

    .little_top_space {
      // margin-top: 0.2cm;
    }

    a {
      // text-decoration: none;
      // color: inherit;
    }

    address {
      // font-style: normal;
    }

    i {
      // color: $color-drawer-icon;
      // min-width: 5mm;
      // max-width: 5mm;
      // font-size: 10pt;
    }

    .content {
      // background-color: rgb(121, 155, 247);
      // margin-left: 5px;
      // font-size: 10pt;
      // color: $color-drawer-content;
    }

    .contact {

      &-heading {
        // color: $color-drawer-heading;
        // font-family: Raleway;
        // font-size: 14pt;
        // font-weight: bold;
        // text-transform: uppercase;
      }

      &-line {
        // margin-top: 15px;
        // min-height: $line-hight-small;
        // max-height: $line-hight-small;
        // width: 55%;
        // background-color: $color-drawer-line;
        // margin-bottom: 0.75cm;
      }
    }

    .address {
      i {
        // background-color: rgba(133, 73, 1, 0.692);
      }
      .content {
        // background-color: rgb(247, 190, 121);
        // font-style: normal;
      }
    }

    .email {
      i {
        // background-color: rgba(133, 73, 1, 0.692);
      }
      .content {
        // background-color: rgb(247, 190, 121);
      }
    }

    .phone {
      i {
        // background-color: rgba(133, 73, 1, 0.692);
      }
      .content {
        // background-color: rgb(247, 190, 121);
      }
    }

    .linkedin {
      i {
        // background-color: rgba(133, 73, 1, 0.692);
      }
      .content {
        // background-color: rgb(247, 190, 121);
      }
    }
  }
}
</style>
