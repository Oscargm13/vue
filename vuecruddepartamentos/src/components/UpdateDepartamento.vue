<template>
    <div>
        <h1>Update departamento</h1>
        <form action="" v-if="departamento" v-on:submit.prevent="updateDepartamento()">
            <input type="text" v-model="departamento.idDepartamento" class="form-control">
            <label for="">Nombre</label>
            <input type="text" v-model="departamento.nombre" class="form-control">
            <label for="">Localidad</label>
            <input type="text" v-model="departamento.localidad" class="form-control">
            <button>editar</button>
        </form>
    </div>
</template>

<script>
import ServiceDepartamentos from '../services/ServiceDepartamentos'
const service = new ServiceDepartamentos();

export default {
    name: "UpdateDepartamento",
    mounted(){
        let id = this.$route.params.id;
        console.log(id)
        service.findDepartamento(id).then(result => {
            this.departamento = result;
        })
    },
    methods: {
        updateDepartamento() {
            service.updateDepartamento(this.departamento).then(result => {
                console.log(result);
                this.$router.push("/");
            })
        }
    },
    data(){
        return {
            departamento: null
        }
    }
}
</script>

<style>

</style>