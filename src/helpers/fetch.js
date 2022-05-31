
//Node.js
//const baseUrl = 'http://localhost:5000/api'

//Produccion
const baseUrl = 'https://eventos-montucuy.herokuapp.com/api'




const fetchSinToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}/`;

    if( method === 'GET') {
      return fetch( url );
    } else {
      return fetch( url, {
        method,
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify( data )
      })
    }
}

const fetchImagen = (data, file, _id, method = 'POST') => {

  const url = `${baseUrl}/imagen/newImagen`;
  const formData = new FormData();
  formData.append('titulo', data.titulo)
  formData.append('descripcion', data.descripcion)
  formData.append('lugar', data.lugar)
  formData.append('imagen',file)
  formData.append('_id', _id)

  return fetch( url, {
      method,
      body: formData
    })
  }

export {
  fetchSinToken,
  fetchImagen
}