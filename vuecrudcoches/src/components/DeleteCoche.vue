<template>
    <div>
        <h1>Delete Coche</h1>
    </div>
</template>

<script>
    import { deleteCar } from "./../services/ServiceCoches";
    export default {
        name: "DeteleCoche",
        mounted() {
        let id = this.$route.params.id;
        deleteCar(id).then(result => {
            console.log(result);
            this.router.push("/")
        })
    }
    }
</script>