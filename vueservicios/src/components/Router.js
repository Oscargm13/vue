import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./HomeComponent.vue";
import EmpleadosDetails from "./EmpleadosDetails.vue";
import EmpleadosOficios from "./EmpleadosOficios.vue";
import CochesComponent from "./CochesComponent.vue";

const myRoutes = [
	{
		path: "/", component: HomeComponent
	},
    {
		path: "/empleados", component: EmpleadosDetails
	}
    ,
    {
		path: "/empleadosoficios/:oficio", component: EmpleadosOficios
	},
    {
		path: "/coches", component: CochesComponent
	}
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes,
})

export default router;