import { createApp } from 'vue'
import App from './App.vue'
import router from './components/Router'

var app = createApp(App);
app.config.globalProperties.$filters = {
    parImpar(dato) {
        var html = "";
        while (dato != 1) {
            if (dato % 2 == 0) {
                dato = dato / 2;

            } else {
                dato = dato * 3 + 1;

            }
            if (dato % 2 == 0) {
                html += "<li style='color: green'>" + dato + "</li>";
            } else {
                html += "<li style='color: red'>" + dato + "</li>";
            }
        }
        return html;
    },
    getOperacion(numero, multiplicador) {
        return numero +"*"+ multiplicador
    },
    getMultiplicacion(numero, multi) {
        return numero * multi;
    }

}
app.use(router).mount('#app');
