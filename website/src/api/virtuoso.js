import axios from 'axios'
const API = "https://kg.drugs4covid.oeg-upm.net/sparql"
export function sendQuery(query){
    const options = {
        params:{
            query:query,
            format:'json'
        }
    }
    return new Promise((resolve, reject) => {
        axios.get(API, options).then((response) => {
            resolve(response.data)
        }).catch((err) => reject(err))
    })
}