<template>
  <div>
    <h2>Numero par o impar</h2>
    <label for="">Introduzca un numero</label>
    <input type="number" v-model="numero" />
    <h3 v-if="numero % 2 == 0" style='color: blue'>PAR</h3>
    <h3 v-else style='color: red'>IMPAR</h3>
    <!-- <h3 v-html="parImpar"></h3> -->
    <button @click="comprobar()">comprobar par o impar</button>

    <div v-html="html"></div>
  </div>
</template>

<script>
export default {
  name: "NumeroParImpar",
  methods: {
    comprobar() {
      //EL METODO NO DEVUELVE NADA NECESITAMOS UN DIBUJO
      this.html = "";
      if (this.numero % 2 == 0) {
        this.html = "<h4 style='color: blue'>PAR "+this.numero+"</h4>";
      } else {
        this.html = "<h4 style='color: red'>IMPAR "+this.numero+"</h4>";
      }
    },
  },
  computed: {
    parImpar() {
      //VAMOS A DEVOLVER TODOS LOS JUEGOS CON UN FORMATO DE COLOR ROJO
      var numero = this.numero;
      var parImpar = "";
      //var estado = "IMPAR"
      //RECORREMOS CADA JUEGO Y MODIFICAMOS SU DIBUJO A ROJO
      if (numero % 2 == 0) {
        parImpar = "PAR";
      } else {
        parImpar = "IMPAR";
      }
      return parImpar;
    },
  },

  data() {
    return {
      html: "",
      numero: 0,
    };
  },
};
</script>

<style>
@import url(./../assets/css/estilos.css);
</style>