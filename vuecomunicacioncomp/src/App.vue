<template>
  <div>
    <MenuTablaMultiplicar/>
    <!-- <PadreDeportes /> -->
    <!-- <PadreNumeros/> -->
    <!-- <ComicsComopnent/> -->
    <!-- <SeleccionMultiple/> -->
    <!-- <EjemploCheckbox/> -->
    <hr/>
    <router-view></router-view>
    <hr/>
  </div>
</template>

<script>
//import MenuComponent from './components/MenuComponent.vue';
import MenuTablaMultiplicar from './components/MenuTablaMultiplicar.vue';
//import ComicsComopnent from './components/ComicsComopnent.vue';
//import PadreDeportes from "./components/PadreDeportes.vue";
//import PadreNumeros from "./components/PadreNumeros.vue"
//import SeleccionMultiple from "./components/SeleccionMultiple.vue";
// import EjemploCheckbox from "./components/EjemploCheckbox.vue";
export default {
  name: "App",
  components: {
    //PadreDeportes,
    //PadreNumeros,
    //ComicsComopnent
    //SeleccionMultiple
    // EjemploCheckbox
    MenuTablaMultiplicar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
