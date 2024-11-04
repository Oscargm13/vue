<template>
<div>
    <h1>Details departamento</h1>
    <router-link to="/">Back to home</router-link>
    <ul class="list-group">
        <li class="list-group-item">
            id: {{$route.params.id}}
        </li>
        <li class="list-group-item">
            Nombre: {{$route.params.nombre}}
        </li>
        <li class="list-group-item">
            Localidad: {{$route.params.localidad}}
        </li>
    </ul>
</div>
    
</template>

<script>
export default {
    name: "DetailsDepartamento"
}
</script>