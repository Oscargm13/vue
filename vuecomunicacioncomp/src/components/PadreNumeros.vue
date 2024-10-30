<template>
  <div>
    <h1>Padre numeros</h1>
    <h2>La suma es: {{suma}}</h2>
    <button @click="seleccionarFavorito()">
        Seleccionar favorito
    </button>
    <button @click="nuevoNumero()">nuevo numero</button>
    <div v-for="num in numeros" :key="num">
        <HijoNumero :numero="num"
        v-on:sumarNumeroParent="sumarNumeroParent"/>
    </div>
  </div>
</template>

<script>
import HijoNumero from './HijoNumero.vue';
export default {
  name: "PadreNumeros",
  components: {
    HijoNumero
},
methods: {
    nuevoNumero(){
        this.numeros.push(parseInt(Math.random() * 100))
    },
    sumarNumeroParent(numero){
        this.suma += numero
    }
},
data() {
    return {
        numeros: [4, 87, 33],
        suma: 0
    }
}
};
</script>