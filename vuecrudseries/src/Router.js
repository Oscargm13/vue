import { createRouter, createWebHistory } from "vue-router";
import HomeSeries from "./components/HomeSeries.vue";
import DetallesSerie from "./components/DetallesSerie.vue";
import SerieComponent from "./components/SerieComponent.vue"


const myRoutes = [
	{
		path: "/", component: HomeSeries
	},{
		path: "/series/:id/:nombre/:imagen/:puntuacion/:anyo", component: DetallesSerie
	},{
		path: "/personajes/:idSerie", component: SerieComponent
	}
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes,
})

export default router;