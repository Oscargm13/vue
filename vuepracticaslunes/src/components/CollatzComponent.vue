<template>
  <div>
    <h2>Numero par o impar</h2>
    <label for="">Introduzca un numero</label>
    <input type="number" v-model="numero" /><br>
    <ul v-html="$filters.parImpar(numero)"></ul>
    <div v-if="numero"></div>
  </div>
</template>

<script>
export default {
  name: "NumeroParImpar",
  data() {
    return {
      html: "",
      numero: 1,
    };
  },
};
</script>
