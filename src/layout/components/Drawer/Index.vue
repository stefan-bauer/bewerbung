<template>
  <div class="drawer">
    <div class="spacer-header"></div>

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
        <div class="contact-spacer"></div>
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
$avatar-boarder: $gray-light;
$drawer-content: $gray-light;
$color-contatheading: $gray-light;
$color-drawer-line: $gray;
$color-drawer-icon: $gray;
$color-drawer-content: $gray-light;
// $line-hight-small:$line-hight-small

.drawer {
  // background-color: rgb(20, 117, 117);

  // line-height: 1.3;

  .spacer-header {
    // background-color: rgb(57, 20, 117);

    min-height: 3cm;
    max-height: 3cm;
  }

  .avatar {
    // background-color: rgb(117, 107, 20);

    text-align: center;

    &-image {
      // display: flex;
      // justify-self: center;

      border: 2px solid $avatar-boarder;
      border-radius: 100%;
      width: 80%;
    }
  }

  .name {
    // background-color: rgb(20, 51, 117);

    margin-top: 0.5cm;
    text-align: left;
    color: $drawer-content;
    font-family: Lato;
    font-size: 14pt;
    font-weight: bold;
    margin-left: 0.75cm;

    &-title {
    }
    &-first {
    }
    &-sir {
      text-transform: uppercase;
    }
  }

  .contact-container {
    // background-color: rgb(117, 20, 117);

    padding: 1.5cm 0 0 0.75cm;
    line-height: 1.5;

    .flexrow {
    // background-color: rgb(114, 241, 220);
      display: flex;

    }

    .little_top_space {
      padding-top: 0.2cm;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    address {
      font-style: normal;
    }

    i {
      // background-color: rgb(213, 247, 121);
      color: $color-drawer-icon;
      min-width: 5mm !important;
      max-width: 5mm !important;
      font-size: 10pt !important;;
      font-style: normal;
      font-weight: lighter;
      line-height: 1.3;
      align-self: flex-end;
    }

    .content {
      // background-color: rgb(121, 155, 247);
      margin-left: 5px;
      font-size: 10pt;
      color: $color-drawer-content;
      align-self: flex-end;
    }

    .contact {
      // background-color: rgb(63, 95, 4);

      &-heading {
        // background-color: rgb(203, 247, 121);

        color: $color-contatheading;
        font-family: Lato;
        font-size: 14pt;
        font-weight: bold;
        text-transform: uppercase;
      }

      &-line {
        margin-top: 15px;
        min-height: $line-hight-small;
        max-height: $line-hight-small;
        width: 55%;
        background-color: $color-drawer-line;
        // margin-bottom: 0.75cm;
      }

      &-spacer {
        min-height: 0.75cm;
        max-height: 0.75cm;
      }
    }

    .address {
      i {
        // background-color: rgba(133, 73, 1, 0.692);
        align-self: flex-end;
        font-size:16px !important;
      }
      .content {
        // background-color: rgb(247, 190, 121);
        align-self: flex-end;
        font-style: normal;
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
