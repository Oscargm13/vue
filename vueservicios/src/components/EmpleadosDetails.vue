<template>
    <div>
        <h1>EmpleadosDetails</h1>
        <form v-on:submit.prevent="buscarEmpleado()">
            <label for="">Seleccione empleado</label>
            <select class="form-control" v-model="idEmpleado">
                <option v-for="emp in empleados" :key="emp" :value="emp.idEmpleado">
                    
                    {{emp.apellido}}
                </option>
            </select>
            <button class="btn-info">
                detalles empleado
            </button>
            <hr>
            <div v-if="empleado">
                <dl>
                    <dt>Oficio: </dt>
                    <dl>{{empleado.oficio}}</dl>
                    <dt>Salario: </dt>
                    <dl>{{empleado.salario}}</dl>
                    <dt>Departamento: </dt>
                    <dl>{{empleado.departamento}}</dl>
                </dl>
            </div>
        </form>
    </div>
    
</template>

<script>
import axios from 'axios';
import Global from '../Global';

export default {
    name: "EmpleadosDetails",
    methods: {
        buscarEmpleado() {
            let request = "api/empleados/"+this.idEmpleado;
            let url = Global.urlApiEmpleados + request;
            axios.get(url).then(response => {
                this.empleado = response.data;
            })
        }
    },
    data() {
        return {
            empleados: [],
            idEmpleado: 0,
            empleado: null
        }
    },
    mounted() {
        let request = "api/empleados";
        let url = Global.urlApiEmpleados + request;
        axios.get(url).then(response => {
            console.log(response.data);
            this.empleados = response.data;
        })
    }
}
</script>