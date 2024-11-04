import axios from "axios";
import Global from "./../Global";

export default class ServicesCoches {
    getCoches = new Promise((resolve) => {
        let coches = [];
        let request = "webresources/coches";
        let url = Global.urlApiCoches + request;
        axios.get(url).then(response => {
            console.log("leyendo servicio");
            coches = response.data;
            resolve(coches)
        })
    })
}