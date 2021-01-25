import axios from 'axios'

export default {
  getStores() {
    let resource = 'https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json'
    return axios.get(resource)
  }
}
