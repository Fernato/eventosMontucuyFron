import React from 'react'
import { Link } from 'react-router-dom'

export const RegistroExitoso = () => {
  return (
    <div className='contenido'>
        <div className='row mt-5'>

            <h1>¡¡¡ GRACIAS POR PARTICIPAR !!!</h1>
            <br className='mt-5'/>
            <br className='mt-5'/>
            <br className='mt-5'/>
            <br className='mt-5'/>
            
            <h2>Invita a mas amigos a que participen !!!</h2>
        </div>
        <div className='row mt-5 salirAgradecimiento'>

            <Link
            className='btnNegro '
            to='/concursofotografia'
        >
            SALIR
        </Link>
        </div>

    </div>
  )
}
