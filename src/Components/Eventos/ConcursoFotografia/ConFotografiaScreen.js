import React from 'react'
import { Link} from 'react-router-dom'
import { Item } from './Item'

export const ConFotografiaScreen = () => {

  return (
    <div className='contenido fotografia'>
          <div className='tituloConFotografia'>
          
            <h1>CONCURSO DE FOTOGRAFIA</h1>
          </div>


        <section className='espacios'>

            <h2>ETAPAS</h2>
          <section className='row row-cols-1 row-cols-md-4 items' >

            <Item 
              imagePath = '/assets/Evento_Fotografia/etapas/registrar.png'
              titulo='Inscripción' 
              parrafo='Del 15 de mayo hasta el 15 de junio de 2022' 
            />

            <Item 
              imagePath = '/assets/Evento_Fotografia/etapas/preseleccion.png'
              titulo='Preselección' 
              parrafo='Del 15 de mayo hasta el 15 de junio de 2022' 
            />

            <Item 
              titulo='Votacion' 
              parrafo='Del 15 de mayo hasta el 15 de junio de 2022' 
            />

            <Item 
              titulo='Premiación' 
              parrafo='15 de junio de 2022' 
            />
          </section>
        </section>

        <section className='espacios'>

          <h2>PARA PARTICIPAR SIGUE ESTOS PASOS:</h2>
          <section className='row row-cols-1 row-cols-md-3 items' >

            <Item 
              titulo='Conoce más del concurso' 
              parrafo='Más información en Términos y Condiciones' 
            />

            <Item 
              titulo='Regístrate' 
              parrafo='Tus datos son importantes para participar.' 
            />

            <Item 
              titulo='Sube tus fotos' 
              parrafo='Del 15 de mayo hasta el 15 de junio' 
            />

          </section>
        </section>

        <div className='seccionBoton'>

          <Link 
            className='botonnegro'
            to="/registroFotografia"  
          >
              Registrarse
          </Link>
        </div>


        <section className='espacios'>

          <h2>PREMIOS:</h2>
          <section className='row row-cols-1 row-cols-md-3 items' >

            <Item 
              titulo='Conoce más del concurso' 
              parrafo='Más información en Términos y Condiciones' 
            />

            <Item 
              titulo='Regístrate' 
              parrafo='Tus datos son importantes para participar.' 
            />

            <Item 
              titulo='Sube tus fotos' 
              parrafo='Del 15 de mayo hasta el 15 de junio' 
            />

          </section>
        </section>

    </div>
  )
}
