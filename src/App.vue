<template>
  <div id="app">
    <div id="nav" class="noPrint">
      <router-link to="/en">Englisch</router-link> |
      <router-link to="/de">Deutsch</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
// #app{
//   background-color:grey;
// }
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
