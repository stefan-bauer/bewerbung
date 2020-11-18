<template>
  <div id="app">
    <div id="nav" class="noPrint">
      <!-- <router-link v-if="isHere('en')" to="/en" @click="setLang('en')">Englisch</router-link> | -->
      <!-- <router-link v-if="isHere('en')" to="/en" @click="setLang('en')">Englisch</router-link> | -->
      <a class="router-link" :href="$router.resolve('/en').href">Englisch</a> |
      <a class="router-link" :href="$router.resolve('/de').href">Deutsch</a> |
      <a class="router-link" :href="$router.resolve('/default').href">Default</a> |

      <!-- <router-link v-if="isHere('de')" to="/de" @click="setLang('de')" >Deutsch</router-link>| -->
      <!-- <router-link v-if="isHere('default')" to="/default" @click="setLang('default')" >Default</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:"app",
  data(){
    return{
      lang:null,
    }
  },
  methods:{
    force(){
      this.vm.$forceUpdate();
    },
    isHere(value){
      if(value == null){return false}
      return this.lang.indexOf(value) == -1?false:true
    },
    setLang(value){
      this.force()
      return this.$i18n.locale = value;
    }
  },
  mounted(){
    const lang = this.$i18n.messages
    const temp=Object.keys(lang).map(item => item)
    // console.log(temp)
    this.lang=temp


  }
}
</script>

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
