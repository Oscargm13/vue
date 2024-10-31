<template>
  <div>
    <ul id="menu">
      <li v-for="numero in numeroAleatorio" :key="numero">
        <router-link :to="'/multiplicar/' + numero">
          Tabla del numero: {{ numero }}
        </router-link> |
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuTablaMultiplicar",
  data() {
    return {
      numeroAleatorio: []
    };
  },
  mounted() {
    for(var i = 1; i <= 5; i++){
        let random = Math.floor(Math.random() * 100);
        this.numeroAleatorio.push(random);
    }
  }
};
</script>

<style>
    ul#menu li {
        display: inline;
        
    }
</style>