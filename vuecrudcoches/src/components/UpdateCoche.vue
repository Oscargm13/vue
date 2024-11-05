<template>
  <div>
    <h1>Update Coche</h1>
    <form action="" v-if="coche" v-on:submit.prevent="updateCoche()">
      <input type="text" v-model="coche.idCoche" class="form-control" />
      <label for="">Marca</label>
      <input type="text" v-model="coche.marca" class="form-control" />
      <label for="">Modelo</label>
      <input type="text" v-model="coche.modelo" class="form-control" />
      <label for="">Conductor</label>
      <input type="text" v-model="coche.conductor" class="form-control" />
      <label for="">Imagen</label>
      <input type="text" v-model="coche.imagen" class="form-control" />
      <button>editar</button>
    </form>
  </div>
</template>

<script>
import { updateCar, findCoche } from "./../services/ServiceCoches";

export default {
  name: "UpdateCoche",
  methods: {
    async updateCoche() {
      try {
        console.log(this.coche);
        const data = await updateCar(this.coche); // Ahora `updateCar` devuelve una promesa
        console.log("Coche actualizado:", data);
        // Aquí puedes realizar cualquier acción adicional, como redirigir o mostrar un mensaje
      } catch (error) {
        console.error("Error al actualizar el coche:", error);
        // Aquí puedes mostrar un mensaje de error en la UI si es necesario
      }
      this.$router.push("/");
    },
  },
  mounted() {
    let id = this.$route.params.id;
    findCoche(id).then((result) => {
      this.coche = result;
    });
  },
  data() {
    return {
      coche: {
        idCoche: 0,
        marca: "",
        modelo: "",
        conductor: "",
        imagen: "",
      },
    };
  },
};
</script>