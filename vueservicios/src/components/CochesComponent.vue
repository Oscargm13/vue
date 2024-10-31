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
import axios from 'axios'
import Global from "./../Global";
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
        let request = "webresources/coches";
        //LAS VARIABLES DECLARADAS POR EMCIMA DE EXPORT DEFAULT NO UTILIZAN 
        //LA PALABRA THIS
        let url = Global.urlApiCoches + request;
        axios.get(url).then(response => {
            console.log("leyendo servicio");
            this.coches = response.data;
        })
    }
}
</script>