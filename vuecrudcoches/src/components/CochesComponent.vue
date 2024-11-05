<template>
  <div>
    <h1>Coches component</h1>
    <img
      style="width: 200px"
      v-if="status == false"
      src="./../assets/images/icono-carga-porcentaje-carga-descarga-progreso-carga-ilustracion-vectorial_266660-667.avif"
      alt=""
    />
    <table v-else class="table table-bordered">
      <thead>
        <th>Id Coche</th>
        <th>Marca</th>
        <th>Modelo</th>
        <th>Conductor</th>
        <th>Imagen</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="car in coches" :key="car">
            <td>{{car.idCoche}}</td>
            <td>{{car.marca}}</td>
            <td>{{car.modelo}}</td>
            <td>{{car.conductor}}</td>
            <td>
                <img :src="car.imagen" alt="" style="width:150px">
            </td>
            <td>
                <router-link class="btn btn-warning" 
                    :to="'/details/'+car.idCoche+ '/' + car.marca +'/'+car.modelo + '/' + car.conductor + '/' + encodeURIComponent(car.imagen)">
                        Details
                </router-link>
                <router-link class="btn btn-info" 
                    :to="'/update/' + car.idCoche">
                        Update
                </router-link>
                <router-link class="btn btn-danger" 
                    :to="'/delete/' + car.idCoche">
                        Delete
                </router-link>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {getCoches} from "./../services/ServiceCoches";
//const service = new ServiceCoches();

export default {
  name: "CochesComponent",
  created() {
        getCoches().then(result => {
            this.status = true;
            this.coches = result;
            console.log(result);
        })
    },
  data() {
    return {
        status: false,
        coches: []
    }
  }
};
</script>