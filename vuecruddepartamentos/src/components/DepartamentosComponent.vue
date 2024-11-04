<template>
<div>
    <h1>Departamentos Component</h1>
    <img style="width: 200px" v-if="status == false" src="./../assets/images/icono-carga-porcentaje-carga-descarga-progreso-carga-ilustracion-vectorial_266660-667.avif" alt="">
    <table v-else class="table table-bordered">
        <thead>
            <th>Id departamento</th>
            <th>nombre</th>
            <th>localidad</th>
            <th></th>
        </thead>
        <tbody>
            <tr v-for="dept in departamentos" :key="dept">
                <td>{{dept.idDepartamento}}</td>
                <td>{{dept.nombre}}</td>
                <td>{{dept.localidad}}</td>
                <td>
                    <router-link class="btn btn-warning" 
                    :to="'/details/'+dept.idDepartamento + '/' + dept.nombre +'/'+dept.localidad">
                        Details
                    </router-link>
                    <router-link class="btn btn-info" 
                    :to="'/update/'+dept.idDepartamento">
                        Edit
                    </router-link>
                    <router-link class="btn btn-danger" 
                    :to="'/delete/'+dept.idDepartamento">
                        Eliminar
                    </router-link>
                </td>

            </tr>
        </tbody>
    </table>
</div>
    
</template>

<script>
import ServiceDepartamentos from "./../services/ServiceDepartamentos"
const service = new ServiceDepartamentos();

export default {
    name: "DepartamentosComponent",
    mounted() {
        service.getDepartamentos().then(result => {
            this.status = true;
            this.departamentos = result;
        })
    },
    data() {
        return {
            departamentos: [],
            status: false
        }
    }
}
</script>