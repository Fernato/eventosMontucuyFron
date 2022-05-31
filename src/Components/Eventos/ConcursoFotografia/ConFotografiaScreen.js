import React from 'react'
import { Link} from 'react-router-dom'
import { Item } from './Item'

export const ConFotografiaScreen = () => {

  return (
    <div className='row contenido fotografia'>
          <div className='tituloConFotografia'>
          
            <h1>UNA IMAGEN NATURAL PARA COVEÑAS</h1>
          </div>


        <section className='row g-0 espacios'>


            <h2>ETAPAS</h2>

          <section className='row row-cols-1 row-cols-md-5 items' >

            <Item 
              imagePath = '/assets/Evento_Fotografia/registrar.png'
              titulo='Inscripción' 
              parrafo='Del 01 de junio hasta el 30 de junio de 2022' 
            />

            <Item 
              imagePath = '/assets/Evento_Fotografia/preseleccion.png'
              titulo='Preselección' 
              parrafo='Del 01 de julio hasta el 03 de julio de 2022' 
            />

            <Item 
            imagePath = '/assets/Evento_Fotografia/votacion.png'
              titulo='Votacion' 
              parrafo='Del 05 de julio hasta el 10 de julio de 2022' 
            />

            <Item 
            imagePath = '/assets/Evento_Fotografia/publicar.png'
              titulo='Publicacion' 
              parrafo='12 de julio de 2022' 
            />
            <Item 
            imagePath = '/assets/Evento_Fotografia/premiacion.png'
              titulo='Premiacion' 
              parrafo='15 de julio de 2022' 
            />
          </section>
        </section>

        <section className='row g-0 espacios'>

          <h2 className='subtitulo'>PARA PARTICIPAR SIGUE ESTOS PASOS:</h2>
          <section className='row row-cols-1 row-cols-md-2 items' >

            <Item 
            imagePath = '/assets/Evento_Fotografia/reglamento.png'
              titulo='Conoce más del concurso' 
              parrafo='Más información en Términos y Condiciones ' 
            />

            <Item 
            imagePath = '/assets/Evento_Fotografia/registrar.png'
              titulo='Regístrate y sube tus fotos' 
              parrafo='Tus datos son importantes para participar del 01 de junio hasta el 30 de junio de 2022' 
            />

          </section>
        </section>

        <section className='row row-cols-1 seccionBoton'>

            <Link 
              className='col botonnegro'
              to="/reglamento-una-imagen-natural-para-covenas"  
            >
                Reglamento
            </Link>

            <Link 
              className='col botonnegro mt-3'
              to="/registroFotografia"  
            >
                Registrarse
            </Link>

        </section>


        <section className='row g-0 espacios '>

          <h2  className='subtitulo' >PREMIOS:</h2>
          <section className='row row-cols-1 row-cols-md-1 items' >

            <Item 
            imagePath = '/assets/Evento_Fotografia/premiacion.png'
              titulo='Primer puesto' 
              parrafo='Ganará Medio Millón de Pesos' 
            />  
          </section>
        </section>

        <section className='espacios queEsperas'>
          <h2>¿QUÉ ESPERAS? PREPARA TU CAMARA</h2>
          <p>Descubre la biodiversidad que puedes encontrar en Coveñas</p>

        </section>

    </div>
  )
}
