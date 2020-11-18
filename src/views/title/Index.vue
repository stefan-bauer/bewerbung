<template>
  <div class="content">
    <page-header>
      <template v-slot:header><slot name="header"/></template>
    </page-header>

    <div class="middle">
      <h1 class="title"><slot name="title"/></h1>
    </div>
    <div class="footer ">
      <div class="table_of_content onlyPrint">
        <div class="heading">Inhalt</div>
        <div class="line"></div>
        <div class="table ">
          <ul>
            <li><a href="#cv"></a></li>
            <li><a href="#skills"></a></li>
            <li><a href="#diplom"></a></li>
            <li><a href="#bachelor"></a></li>
            <li><a href="#htl"></a></li>
            <!-- <li><a href="#competences-title"></a></li> -->
          </ul>
        </div>
      </div>
      <div class="table_of_content noPrint">
        <div class="heading">Inhalt</div>
        <div class="line"></div>
        <div class="table ">
          <ul>
            <li><a href="#cv">CV</a></li>
            <li><a href="#skills">Skill</a></li>
            <li><a href="#diplom"></a>diplom</li>
            <li><a href="#bachelor">bach</a></li>
            <li><a href="#htl">htl</a></li>
            <!-- <li><a href="#competences-title"></a></li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "./components/Header";
export default {
  name: "title_content",
  components: {
    PageHeader
  }
};
</script>

<style lang="scss" scoped>
.content {
//   background-color: rgba(71, 207, 8, 0.726);s
  display: flex;
  flex-wrap: wrap;
    flex:1 1 100%;
  align-content: space-between;

  .middle {
    // background-color: green;s
    // flex-grow: 10;
    flex-basis: inherit;

    text-align: center;

    h1 {
      color: $color-title;
    }
  }

  .footer {
    // background-color: blueviolet;
    margin-bottom: 2cm;
    flex-basis: inherit;

    .table_of_content {
      // display:none;
      margin-left: 1cm;
      margin-right: 1cm;

      .heading {
        font-family: Raleway;
        font-size: 14pt;
        font-weight: bold;
        color: $color-default-header;
      }
      .line {
        margin-top: 10px;
        min-height: 2px;
        max-height: 2px;
        width: 15%;
        background-color: $color-default-line;
      }
      .table {
        ul {
          list-style: none;

          li {
            border-bottom: 0.25pt solid $gray;
            margin: 0.25cm 0;
            padding-top: 0.25cm;

            a {
              color: inherit;
              text-decoration: none;

              &::before {
                content: target-text(attr(href));
              }

              &::after {
                color: inherit;
                content: target-counter(attr(href), page);
                float: right;
              }
            }
          }
        }
      }
    }
  }
}
</style>
