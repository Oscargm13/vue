<template>
  <div>
    <h2>Metodo Filter</h2>
    <ul>
        <li v-for="num in numeros" :key="num">
            Numero: {{num}}
            Doble: {{$filters.getNumeroDoble(num)}}
        </li>
    </ul>
    <hr>
    <ul>
        <li v-for="nombre in nombres" :key="nombre">
            {{$filters.mayuscula(nombre)}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MetodoFilter",
  data() {
    return {
      numeros: [2, 3, 53, 76, 1, 87, 93],
      nombres: ["Adrian", "Lucia", "Diana", "Carlos", "Antonia"]
    };
  },
};
</script>