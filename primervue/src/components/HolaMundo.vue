<template>
    <div>
        <h1>Mi primera app de Vue</h1>
        <h2>Su nombre es: {{nombre}}</h2>
        <h2>Su numero es: {{numero}}</h2>
        <img src="" alt="">
    </div>
</template>

<script>


export default {
    name: "HolaMundo",
    data() {
        //AQUI DECLARAMOS LA VARIABLES PARA EL DIBUJO
        //SON DECLARADAS CON JSON DENTRO DEL RETURN
        return{
            nombre: "alumnos",
            numero: 14,
            miArray: []
        }
    }
}
</script>

<style>
    h1 {color: green;}
    @import url(./../assets/css/estilos.css);
</style>