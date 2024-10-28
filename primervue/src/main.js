import { createApp } from 'vue'
import App from './App.vue'
import router from './components/Router'

var app = createApp(App)
app.config.globalProperties.$filters = {
    //CREAMOS LO METODOS QUE RECIBIRAN PARAMETROS Y DEVUELVEN CODIGO
    mayuscula(dato){
        return dato.toUpperCase();
    },
    getNumeroDoble(numero) {
        return numero * 2;
    }
}
app.use(router).mount('#app')
