<template>
    <div>
        <h1>Detalles coche</h1>
        <router-link to="/">Volver</router-link>
        <ul class="list-group">
        <li class="list-group-item">
            id: {{$route.params.id}}
        </li>
        <li class="list-group-item">
            Marca: {{$route.params.marca}}
        </li>
        <li class="list-group-item">
            Modelo: {{$route.params.modelo}}
        </li>
        <li class="list-group-item">
            Conductor: {{$route.params.conductor}}
        </li>
        <li class="list-group-item">
            <img :src="$route.params.imagen" alt="" style="width:150px">
        </li>
    </ul>
    </div>
</template>

<script>
    export default {
        name: "DetailsCoche",
        
    }
</script>