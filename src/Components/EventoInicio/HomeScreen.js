import React from 'react'
import { Link} from 'react-router-dom'


export const HomeScreen = () => {

  const imagePath = '/assets/Evento_Fotografia/fotografia.jpg'
  return (
    <div className='container'>
      

        <h1>EVENTOS</h1>
        <hr/>


      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="card">
          <img  className="card-img-top" src={imagePath} alt={imagePath} ></img>
          <div className="card-body">
            <h5 className="card-title">CONCURSO DE FOTOGRAFIA</h5>
            <p className="card-text">¿Estás interesado en participar en el Concurso de Fotografía de Coveñas?  </p>
            <h3>Aqui encontraras el reglamento para el concurso.</h3>
            <Link className="btn btn-primary" to="/concursofotografia">Ver mas ...</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

