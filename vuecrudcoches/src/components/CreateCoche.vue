<template>
  <div>
    <h1>Create coche</h1>
    <form action="" v-on:submit.prevent="insertCoche()">
      <label for="">Id Coche</label>
      <input type="number" v-model="coche.idCoche" class="form-control" />
      <label for="">Marca</label>
      <input type="text" v-model="coche.marca" class="form-control" />
      <label for="">Modelo</label>
      <input type="text" v-model="coche.modelo" class="form-control" />
      <label for="">Conductor</label>
      <input type="text" v-model="coche.conductor" class="form-control" />
      <label for="">Imagen</label>
      <input type="text" v-model="coche.imagen" class="form-control" />
      <button class="btn btn-info">Create</button>
    </form>
  </div>
</template>
<script>
import { insertcoche } from "./../services/ServiceCoches";
export default {
  name: "CreateCoches",
  methods: {
    insertCoche() {
      insertcoche(this.coche)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
        this.$router.push("/");
    },
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