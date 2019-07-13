<template>
 <div id="translateIn">
     TranslateIn
     <form v-on:submit="formSubmit">
         <input type="text" v-model="textoTraducir" placeholder="Escriba una palabra...">
         <input type="submit" value="Traducir">
        <select v-model="idioma">
            <option value="en">Ingles</option>
            <option value="it">Italiano</option>
            <option value="ko">Koreano</option>
            <option value="la">Latin</option>
            <option value="zh">Chino</option>
            <option value="is">Iceland</option>
        </select>
</form>
</div>
</template>

<script>
export default {
 name: 'translateIn',
 data(){
     return{
        textoTraducir:'', 
        idioma:''
     }
   },
    created(){
     this.idioma = 'en'; 
    },
    methods: {
     formSubmit(e){
        
         this.$emit('formSubmit', this.textoTraducir,this.idioma); 
         e.preventDefault();
     }
 }
}
</script>

<style>

</style>