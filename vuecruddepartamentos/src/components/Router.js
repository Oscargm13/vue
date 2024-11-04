import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from "./DepartamentosComponent.vue";
import CreateDepartamento from "./CreateDepartamento.vue";
import DetailsDepartamento from "./DetailsDepartamento.vue";
import UpdateDepartamento from "./UpdateDepartamento.vue";
import DeleteDepartamento from "./DeleteDepartamento.vue";

const myRoutes = [
	{
		path: "/", component: DepartamentosComponent
	},
	{
		path: "/create", component: CreateDepartamento
	},
	{
		path: "/details/:id/:nombre/:localidad", component: DetailsDepartamento
	}
	,
	{
		path: "/update/:id", component: UpdateDepartamento
	},
	{
		path: "/delete/:id", component: DeleteDepartamento
	}
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes,
})

export default router;