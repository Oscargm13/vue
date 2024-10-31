<template>
    <div>
        <h1>Customers Component</h1>
        
            <label for="">Buscar por nombre</label>
            <input type="text" ref="id" v-model="cajaId">
            <button @click="buscarId()">buscar</button>
        
        <div v-for="customer in customers" :key="customer">
            <ul>
                <li>Compañia: {{customer.companyName}}</li>
                <li>Nombre: {{customer.contactName}}</li>
            </ul>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import Global from "./../Global";
//SI NECESITAMOS VARIABLES DECLARADAS PARA USARLA EN TODOS LOS COMPONENTES
//LA DECLARAMOS AQUI

export default {
    name: "CustomersComponent",
    data() {
        return {
            customers: [],
            cajaId: "",
            customer: []
        }
    },

    methods: {
        buscarId() {
            let request = "customers/" + this.cajaId;
            console.log(this.cajaId);
            axios.get(Global.urlApiCustomers + request).then(response => {
                this.customers = response.data;
                console.log(response.data)
            })
        }
    },

    mounted() {
        let request = "customers ";
        //LAS VARIABLES DECLARADAS POR EMCIMA DE EXPORT DEFAULT NO UTILIZAN 
        //LA PALABRA THIS
        let url = Global.urlApiCustomers + request;
        axios.get(url).then(response => {
            console.log("leyendo servicio");
            this.customers = response.data.results;
        })
    }
}
</script>