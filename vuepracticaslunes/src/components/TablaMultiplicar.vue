<template>
  <div>
    <h2>Tabla de multiplicar</h2>
    <label for="">Introduce un numero</label>
    <input type="number" v-model="numero" /><br />
    <button @click="calcularTabla(numero)">calcular tabla</button>
    <div v-html="html"></div>
    <div v-for="num in 10" :key="num">
      <li>
        {{ num + " x " + this.numero + " = " + num * numero }}
      </li>
    </div>
    <table border="1">
        <tr v-for="contador in 10" :key="contador">
            <td>{{$filters.getOperacion(numero, contador)}}</td>
            <td>{{$filters.getMultiplicacion(numero, contador)}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  methods: {
    calcularTabla(numero) {
      this.html = "";
      for (var i = 1; i <= 10; i++) {
        numero * i;
        this.html += "<ul>";
        this.html += "<li>" + numero + "x" + i + " = " + numero * i + "</li>";
        this.html += "</ul>";
      }
      return this.html;
    },
  },
  
  data() {
    return {
      numero: 0,
      html: ""
    };
  },
};
</script>