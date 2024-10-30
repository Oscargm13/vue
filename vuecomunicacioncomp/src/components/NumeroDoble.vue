<template>
  <div>
    <h1>Número doble Routes</h1>
    <button @click="redirectToHome()">Go to Home</button>


    <h3 style="color: red">
 Doble: {{ doble }}

    </h3>


    <h2 style="color: blue">
{{ mensaje }}

    </h2>
  </div>
</template> 

<script>
export default {
  name: "NumeroDoble",

  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
  },

  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      //SOLAMENTE DEBEMOS REALIZAR LAS ACCIONES

      //CUANDO NUESTRO PARAMETRO CAMBIE

      if (nextVal != oldVal) {
        this.mensaje = "Esto ha cambiado!!! " + this.$route.params.numero;

        let valor = parseInt(this.$route.params.numero);

        this.doble = valor * 2;
      }
    },
  },

  data() {
    return {
      mensaje: "",

      doble: 0,
    };
  },
  mounted() {
    console.log("Param: " + this.$route.params.numero); //LOS PARAMETROS SON STRING, NO IMPORTA SI SON NUMERICOS

    let paramNumero = this.$route.params.numero;

    if (paramNumero == "") {
      console.log("Sin parámetros");

      this.mensaje = "Sin parámetros en Routing";
    } else {
      this.mensaje = "Parámetro recibido: " + paramNumero;

      let valor = parseInt(this.$route.params.numero);

      this.doble = valor * 2;
    }
  },
};
</script> 