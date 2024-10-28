<template>
    <div>
        <h2>Directivas</h2>
        <!-- EL DOLAR NOS PERMITE ACCDER A ELEMENTOS DEL DATA -->
        <h1>{{$data.series}}</h1>
        <label for="">Introduzca un numero</label>
        <input type="number" v-model="numero">
        <h3 v-if="numero > 0" style="color:green" >POSITIVO</h3>
        <h3 v-else-if="numero < 0" style="color:red">NEGATIVO</h3>
        <h3 v-else >CERO</h3>
        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie">
                {{serie}}
            </li>

        </ul>
    </div>
</template>

<script>


export default {
    name: "DirectivasComponent",
    data() {
        return {
            numero: 2,
            nombre: "Alumno",
            edad: 25,
            series: ["Futurama", "Suits", "Stranger Things", "The boys"]
        }
    }
}
</script>

<style>
    @import url(./../assets/css/estilos.css);
</style>