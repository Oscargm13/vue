<template>
    <div>
        <h1>Home Component</h1>
        <h2 style="color:green">{{mensaje}}</h2>
    </div>
    
</template>

<script>
import Ejemplo from "./../services/Ejemplo"
const service = new Ejemplo();

export default {
    
    name: "HomeComponent",
    mounted() {
        this.mensaje = service.getSaludo("Alumno")
    },
    data() {
        return {
          mensaje: ""
        }
        
    }
}
</script>