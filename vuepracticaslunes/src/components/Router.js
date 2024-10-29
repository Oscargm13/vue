import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./HomeComponent.vue";
import CollatzComponent from "./CollatzComponent.vue";
import TablaMultiplicar from "./TablaMultiplicar.vue";

const myRoutes = [
	{
		path: "/", component: HomeComponent
	},
	{
		path: "/collatz", component: CollatzComponent
	},
	{
		path: "/tabla", component: TablaMultiplicar
	}
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes,
})

export default router;