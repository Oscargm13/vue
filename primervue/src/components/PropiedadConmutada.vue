<template>
  <div>
    <h2>PropiedadConmutada</h2>
    <button @click="getJuegosAzules()">juegos azules</button>
    <div v-html="html"></div>
    <!-- <ul>
      <li v-for="game in juegosRojos" :key="game" v-html="game"></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "PropiedadConmutada",
  methods: {
    getJuegosAzules() {
      //EL METODO NO DEVUELVE NADA NECESITAMOS UN DIBUJO
      this.html = "";
      for (var juego of this.juegos) {
        this.html += "<h4 style='color: blue'>" + juego + "</h4>";
      }
    },
  },
  computed: {
    juegosRojos() {
      //VAMOS A DEVOLVER TODOS LOS JUEGOS CON UN FORMATO DE COLOR ROJO
      var datos = this.juegos;
      //RECORREMOS CADA JUEGO Y MODIFICAMOS SU DIBUJO A ROJO
      for (var i = 0; i < datos.length; i++) {
        var juego = datos[i];
        juego = "<span style='color:red'>" + juego + "</span>";
        datos[i] = juego;
      }
      return datos;
    },
  },

  data() {
    return {
      html: "",
      juegos: ["Parchis", "Canicas", "Mus", "La cuerda", "Poker"],
    };
  },
};
</script>

<style>
@import url(./../assets/css/estilos.css);
</style>