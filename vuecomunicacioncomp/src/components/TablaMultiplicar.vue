<template>
    <div>
        <h1>Tabla de multiplicar {{this.$route.params.numero}}</h1>
        <ul v-html="mensaje">
            
        </ul>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    mounted() {
        this.generarTabla();
  },
  watch: {
    '$route.params.numero'(nextVal, oldVal){
        if(nextVal != oldVal){
            this.generarTabla();
        }
    }
  },
  methods: {
    generarTabla() {
        let paramNumero = this.$route.params.numero;
        console.log("Param: " + paramNumero);
    if (paramNumero == "") {
      console.log("Sin parámetros");

      this.mensaje = "Sin parámetros en Routing";
    } else {
        this.mensaje = "";
        
        for(let i = 0; i <= 10; i++) {
            let multiplicar = paramNumero * i;
            this.mensaje += "<li>"+paramNumero+ " x " + i + " = "+multiplicar+"</li>";
        }
    }
    }
  },
  data() {
    return {
        mensaje: "",
        numero: 0
    }
  }
}
</script>