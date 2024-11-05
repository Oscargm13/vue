import Global from "./../Global";
import axios from "axios";

export default class ServiceSeries {
    getSeries() {
        return new Promise(function (resolve) {
            let request = "api/series"
            let series = [];
            let url = Global.urlApiSeries + request;
            axios.get(url).then(response => {
                series = response.data;
                resolve(series);
            })
        })
    }
}