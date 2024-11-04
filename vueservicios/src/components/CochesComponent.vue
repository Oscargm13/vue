<template>
    <div>
        <h1>Coches Component</h1>
        <div v-for="car in coches" :key="car">
            <h2 style="color:blue">
                {{car.marca}} {{car.modelo}}
            </h2>
            <p>Conductor: {{car.conductor}}</p>
            <img :src="car.imagen" style="width: 150px">
        </div>
    </div>
</template>

<script>
const service = new ServicesCoches();
import ServicesCoches from "./../services/ServicesCoches"
//SI NECESITAMOS VARIABLES DECLARADAS PARA USARLA EN TODOS LOS COMPONENTES
//LA DECLARAMOS AQUI

export default {
    name: "CochesComponent",
    data() {
        return {
            coches: []
        }
    },
    mounted() {
        service.getCoches.then(result => {
            this.coches = result;
        })
    }
}
</script>