<template>
  <div>
    <h1>Ejemplo Checkbox</h1>
    <button @click="generarNumeros()">Generar numeros</button>
    <div v-for="opt in opciones" :key="opt">
      <input
        type="checkbox"
        :value="opt"
        v-model="selecciones"
        @change="sumarNumeros()"
      />
      <label for="">{{ opt }}</label>
    </div>
    <h4>{{ this.suma }}</h4>
  </div>
</template> 
<script>
export default {
  name: "EjemploCheckbox",
  methods: {
    generarNumeros() {
        this.opciones = [];
        this.suma = 0;
        this.selecciones = [];
      for (var i = 1; i <= 10; i++) {
        this.opciones.push(parseInt(Math.random() * 100));
      }
    },
    sumarNumeros() {
      this.suma = 0;
      for (let opt of this.selecciones) {
        this.suma += opt;
      }
    },
  },
  data() {
    return {
      opciones: [],
      selecciones: [],
      suma: 0,
    };
  },

  created() {},
};
</script> 