<template>
  <div>
    <h1>Selección múltiple</h1>
    <form v-on:submit.prevent="mostrarSeleccionados()">
      <select size="8" multiple v-model="opcionesSeleccionadas">
        <option v-for="opt in opciones" :key="opt">
          {{ opt }}
        </option></select
      ><br />
      <button>Mostrar seleccionados</button>
      <h6 style="color: blue">{{ seleccionados }}</h6>
    </form>
  </div>
</template> 
<script>
export default {
  name: "SeleccionMultiple",
  methods: {
    mostrarSeleccionados() {
      let aux = "";
      for (let option of this.opcionesSeleccionadas) {
        aux += option + ", ";
      }
      this.seleccionados = aux;
    },
  },
  data() {
    return {
      opcionesSeleccionadas: [],

      opciones: [],

      seleccionados: "",
    };
  },

  created() {
    for (var i = 1; i <= 10; i++) {
      this.opciones.push("Elemento " + i);
    }
  },
};
</script> 
