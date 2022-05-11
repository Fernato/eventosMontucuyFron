
//Node.js
//const baseUrl = 'http://localhost:5000/api'

//Produccion
const baseUrl = 'https://eventos-montucuy.herokuapp.com/api/'




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


export {
  fetchSinToken
}