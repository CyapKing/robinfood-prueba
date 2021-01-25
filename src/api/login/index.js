import axios from 'axios'

export default {
  login(email, password) {
    let resource = 'https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json'
    console.log(email, password)
    return new Promise((resolve, reject) => {
      axios
        .get(resource)
        .then(response => {
          console.log(response, email, password)
          if (response.data.response.users) {
            let userLogged = response.data.response.users.find(
              user => user.email === email && user.password === password
            )
            if (userLogged) {
              resolve(userLogged)
            } else {
              reject(new Error('El usuario o la contraseña son incorrectos'))
            }
          } else {
            reject(new Error('No ha sido posible loguearse, inténtelo de nuevo'))
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
