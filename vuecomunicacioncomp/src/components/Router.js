import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./HomeComponent.vue";
import EjemploCheckbox from "./EjemploCheckbox.vue";
import NumeroDoble from "./NumeroDoble.vue";

const myRoutes = [
	{
		path: "/", component: HomeComponent
	},
    {
		path: "/sumar", component: EjemploCheckbox
	},
    {
		path: "/doble", component: NumeroDoble
	}
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes,
})

export default router;