import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../components/HomeComponent.vue";
import Musica from "../components/Musica.vue";
import Cine from "../components/Cine.vue";
import CicloVida from "./CicloVida.vue"
import DirectivasComponent from "./DirectivasComponent.vue"
import PropiedadConmutada from "./PropiedadConmutada.vue"
import NumeroParImpar from "./NumeroPaerImpar.vue";
import MetodoFilter from "./MetodoFilter.vue";

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/musica", component: Musica
    },
    {
        path: "/cine", component: Cine
    },
    {
        path: "/ciclos", component: CicloVida
    },
    {
        path: "/directivas", component: DirectivasComponent
    },
    {
        path: "/conmutada", component: PropiedadConmutada
    },
    {
        path: "/par", component: NumeroParImpar
    },
    {
        path: "/filter", component: MetodoFilter
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router
