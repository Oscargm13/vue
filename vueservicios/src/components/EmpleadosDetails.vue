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
import ServiceEmpleados from "./../services/ServiceEmpleados"
const service = new ServiceEmpleados();

export default {
    name: "EmpleadosDetails",
    methods: {
        buscarEmpleado() {
            service.findEmpleados(this.idEmpleado).then(result => {
                this.empleado = result;
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
        service.getEmpleados().then(result => {
            this.empleados = result;
            console.log(result)
        })
    }
}
</script>