<template>
  <div>
    <li style="color: red">
      {{ nombredeporte }}
    </li>
    <button @click="seleccionarFavorito()">mostrar</button>
  </div>
</template> 

<script>
export default {
  name: "HijoDeporte",
  props: ["nombredeporte"],
  methods: {
    seleccionarFavorito() {
      console.log("Soy el hijo");
      //DEBEMOS REALIZAR LA LLAMADA AL PARENT, MEDIANTE STRINT "nombreMetodoParent"
      //PARA ENVIAR INFORMACION SE UTILIZAN COMAS
      this.$emit("seleccionarFavoritoParent", this.nombredeporte);
    },
  },
  mounted() {
    console.log(this.nombredeporte);
  },
};
</script> 