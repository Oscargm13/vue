<template>
<div>
    <nav
    class="navbar navbar-expand-sm navbar-dark bg-dark"
    aria-label="Third navbar example"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">DEPARTAMENTOS</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample03"
        aria-controls="navbarsExample03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Series</a
            >

            <ul class="dropdown-menu">
              <li v-for="serie in series" :key="serie">
                <router-link class="dropdown-item"
				:to="'/series/' + serie.idSerie + '/' + serie.nombre
				+ '/' + encodeURIComponent(serie.imagen) + '/' + serie.puntuacion + '/' + serie.anyo">
				{{serie.nombre}}
				</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
  
</template>

<script>
	import ServiceSeries from "./../services/ServiceSeries"
	const service = new ServiceSeries();
    export default {
        name: "MenuSeries",
		mounted() {
			service.getSeries().then(result => {
				this.series = result;
			})
		},
		data() {
			return {
				series: []
			}
		}
    }
</script>