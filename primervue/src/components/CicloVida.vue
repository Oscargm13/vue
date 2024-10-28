<template>
    <div>
        <h2>Ciclo vida events</h2>
        <button @click="cambiarSaludo()">cambiar saludo</button>
        
        <h3>{{saludo}}</h3>
        <!-- <img src="./../assets/images/cinema-4153289_640.webp" alt=""> -->
    </div>
</template>

<script>


export default {
    name: "CicloVida",
    data(){
        return{
            saludo: "Hoy es lunes..."
        }
    },
    methods: {
        cambiarSaludo(){
            //SE UTILIZA LA PALBRA CLAVE DE this
            this.saludo = "Y mañana es martes..."
        }
    },
    mounted() {
        console.log("Component montado")
    },
    unmounted() {
        console.log("Component destruido")
    },
    updated() {
        console.log("Component modificado")
    },
    created() {
        console.log("Component creado")
    }
    
}
</script>

<style>
    @import url(./../assets/css/estilos.css);
</style>