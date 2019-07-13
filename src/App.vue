<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <translateIn v-on:formSubmit="traducirTexto"/>
    <translateOut v-text="traduciresteTexto"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import translateIn from './components/translateIn.vue'
import translateOut from './components/translateOut.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    translateIn,
    translateOut
  },
  data: function(){ 
   return{
     traduciresteTexto:'' 
   }
 },
  methods: {
   traducirTexto:function(texto,idioma){
    this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190622T213455Z.f67e95598c7aee64.c0c49d0594aa527178d83c8e3c1a81ed05709a56&lang='+idioma+ '&text='+texto) //aqui concatenamos el texto que nos llega
     .then((response) => {
      this.traduciresteTexto = response.body.text[0]
     });
 }
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
