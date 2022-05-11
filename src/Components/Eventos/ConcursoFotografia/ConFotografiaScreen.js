import React from 'react'
import { Link} from 'react-router-dom'
import { Item } from './Item'

export const ConFotografiaScreen = () => {

  return (
    <div className='row contenido fotografia'>
          <div className='tituloConFotografia'>
          
            <h1>CONCURSO DE FOTOGRAFIA</h1>
          </div>


        <section className='row g-0 espacios'>


            <h2>ETAPAS</h2>

          <section className='row row-cols-1 row-cols-md-4 items' >

            <Item 
              imagePath = '/assets/Evento_Fotografia/registrar.png'
              titulo='Inscripción' 
              parrafo='Del 15 de mayo hasta el 15 de junio de 2022' 
            />

            <Item 
              imagePath = '/assets/Evento_Fotografia/preseleccion.png'
              titulo='Preselección' 
              parrafo='Del 15 de mayo hasta el 15 de junio de 2022' 
            />

            <Item 
            imagePath = '/assets/Evento_Fotografia/registrar.png'
              titulo='Votacion' 
              parrafo='Del 15 de mayo hasta el 15 de junio de 2022' 
            />

            <Item 
            imagePath = '/assets/Evento_Fotografia/registrar.png'
              titulo='Premiación' 
              parrafo='15 de junio de 2022' 
            />
          </section>
        </section>

        <section className='row g-0 espacios'>

          <h2>PARA PARTICIPAR SIGUE ESTOS PASOS:</h2>
          <section className='row row-cols-1 row-cols-md-3 items' >

            <Item 
            imagePath = '/assets/Evento_Fotografia/registrar.png'
              titulo='Conoce más del concurso' 
              parrafo='Más información en Términos y Condiciones' 
            />

            <Item 
            imagePath = '/assets/Evento_Fotografia/registrar.png'
              titulo='Regístrate' 
              parrafo='Tus datos son importantes para participar.' 
            />

            <Item 
            imagePath = '/assets/Evento_Fotografia/registrar.png'
              titulo='Sube tus fotos' 
              parrafo='Del 15 de mayo hasta el 15 de junio' 
            />

          </section>
        </section>

        <section className='seccionBoton'>

          <Link 
            className='botonnegro'
            to="/registroFotografia"  
          >
              Registrarse
          </Link>
        </section>


        <section className='row g-0 espacios'>

          <h2>PREMIOS:</h2>
          <section className='row row-cols-1 row-cols-md-3 items' >

            <Item 
            imagePath = '/assets/Evento_Fotografia/registrar.png'
              titulo='Conoce más del concurso' 
              parrafo='Más información en Términos y Condiciones' 
            />

            <Item 
            imagePath = '/assets/Evento_Fotografia/registrar.png'
              titulo='Regístrate' 
              parrafo='Tus datos son importantes para participar.' 
            />

            <Item 
            imagePath = '/assets/Evento_Fotografia/registrar.png'
              titulo='Sube tus fotos' 
              parrafo='Del 15 de mayo hasta el 15 de junio' 
            />

          </section>
        </section>

    </div>
  )
}
