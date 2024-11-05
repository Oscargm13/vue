<template>
	<div>
		<h1>Serie Component</h1>
		<table>
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Imagen</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="personaje in personajes" :key="personaje">
					<td>{{personaje.nombre}}</td>
					<td>
						<img :src="personaje.imagen" alt="" style="width:150px">
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import ServiceSeries from '../services/ServiceSeries';
const service = new ServiceSeries();
	export default {
		name: "SerieComponent",
		mounted() {
			let idSerie = this.$route.params.idSerie;
			console.log(idSerie)
			service.getPersonajesSerie(idSerie).then(result => {
				this.personajes = result
				console.log(result);
			})
		},
	data() {
		return {
			personajes: []
		}
	}
	}
</script>