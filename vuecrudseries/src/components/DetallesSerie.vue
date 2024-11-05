<template>
	<div>
		<h1>Detalles serie</h1>
		<table>
			<thead>
				<tr>
					<th>ID Serie</th>
					<th>Nombre</th>
					<th>puntuacion</th>
					<th>Año</th>
					<th>Portada</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{{$route.params.id}}</td>
					<td>{{$route.params.nombre}}</td>
					<td>{{$route.params.puntuacion}}</td>
					<td>{{$route.params.anyo}}</td>
					<td>
						<img :src="$route.params.imagen" alt="" style="width:150px">
					</td>
				</tr>
			</tbody>
		</table>
		<router-link class="btn btn-info" :to="'/personajes/' + $route.params.id">Personajes</router-link>
	</div>
</template>

<script>
	export default {
		name: "DetalleSerie",

	}
</script>