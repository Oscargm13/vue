<template>
<div>
  <EmpleadosDetails/>
</div>
</template>

<script>
//import CochesComponent from './components/CochesComponent.vue'
import EmpleadosDetails from './components/EmpleadosDetails.vue'

export default {
  name: 'App',
  components: {
    //CochesComponent,
    EmpleadosDetails
  }
}
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
