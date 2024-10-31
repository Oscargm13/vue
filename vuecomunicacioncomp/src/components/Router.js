import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./HomeComponent.vue";
import EjemploCheckbox from "./EjemploCheckbox.vue";
import NumeroDoble from "./NumeroDoble.vue";
import TablaMultiplicar from "./TablaMultiplicar.vue";
import MenuTablaMultiplicar from "./MenuTablaMultiplicar.vue";

const myRoutes = [
	{
		path: "/", component: HomeComponent
	},
    {
		path: "/sumar", component: EjemploCheckbox
	},
    {
		path: "/doble", component: NumeroDoble
	},
    {
		path: "/tabla", component: MenuTablaMultiplicar
	}
	,
    {
		path: "/multiplicar/:numero?", component: TablaMultiplicar
	}
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes,
})

export default router;