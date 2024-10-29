<template>
  <div>
    <h1 style="color: green">Padre deportes</h1>
    <h2 style="background-color: yellow">
      su deporte favorito es {{ favorito }}
    </h2>
    <ul v-for="sport in deportes" :key="sport">
      <!-- <li>{{sport}}</li> -->
      <li>
        <HijoDeportes
          :nombredeporte="sport"
          v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import HijoDeportes from "./HijoDeportes.vue";

export default {
  name: "PadreDeportes",
  methods: {
    seleccionarFavoritoParent(deporteFavorito) {
      console.log("Yo soy tu padre");
      this.favorito = deporteFavorito;
    },
  },
  components: {
    HijoDeportes,
  },
  data() {
    return {
      deportes: ["Futbol", "Baloncesto", "Golf", "Tenis", "Boxeo", "Petanca"],
      favorito: null,
    };
  },
};
</script>