import React from 'react'
import { Link} from 'react-router-dom'
import { Item } from './Item'

export const ConFotografiaScreen = () => {

  return (
    <div className='container'>
          <div className='tituloConFotografia'>
          
            <h1>CONCURSO DE FOTOGRAFIA</h1>
          </div>

        <h2>REGLAMENTO</h2>

        <Item 
          titulo='Quienes podran participar' 
          lema='Niños, jovenes y adultos' 
          parrafo='Last updated 3 mins ago' 
        />

        <Item 
          titulo='Premios' 
          lema='Niños, jovenes y adultos'
          parrafo='Last updated 3 mins ago' 
        />

        <Item 
          titulo='Fechas' 
          lema='Del 15 de mayo hasta el 15 de junio' 
          parrafo='Last updated 3 mins ago' 
        />

        <Item 
          titulo='Temática de las fotografias' 
          lema='La cultura en nuestra vida cotidiana. ' 
          parrafo='Se busca que las fotografias reflejen el comportamiento de la vida diaria de los coveñeros' 
        />


        <Link 
          className='btn btn-primary botoncentrado'
          to="/registroFotografia"  
        >
            Registrarse
        </Link>

    </div>
  )
}
