<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home | </router-link>
            </li>
            <li>
                <router-link to="/cine">Cine | </router-link>
            </li>
            <li>
                <router-link to="/musica">Musica | </router-link>
            </li>
            <li>
                <router-link to="/ciclos">CicloVida | </router-link>
            </li>
            <li>
                <router-link to="/directivas">DirectivasComp | </router-link>
            </li>
            <li>
                <router-link to="/conmutada">PropiedadConmutada | </router-link>
            </li>
            <li>
                <router-link to="/par">ParImpar | </router-link>
            </li>
            <li>
                <router-link to="/filter">Metodo Filter </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MenuComponent"
    }
</script>

<style>
    ul#menu li {
        display: inline
    }
</style>