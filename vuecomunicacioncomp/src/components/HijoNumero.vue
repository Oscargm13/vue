<template>
  <div>
    <h1 style="color: green">Hijo numero {{this.numero}}</h1>
    <button @click="sumarNumero()">sumar numero</button>
  </div>
</template>

<script>
export default {
    name: "HijoNumero",
    props: ["numero"],
    methods: {
        sumarNumero() {
            this.$emit("sumarNumeroParent", this.numero);
        }
    }
};
</script>