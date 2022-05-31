import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { imagenParticipante } from '../../actions/imagenAction'
import {FormRegistro} from '../registro/FormRegistro'
import { FromImagen } from './FromImagen'
import { TablaParticipantes } from './TablaParticipantes'

export const RegistroFotografiaScreen = () => {

  const {participante} = useSelector(state=> state.imagen)
  const dispatch = useDispatch()

  const terminar = () => {
    dispatch(dispatch(imagenParticipante({})))
  }

  if(participante._id) return ( 
    <div className='contenido'>
      <h1>CARGAR IMAGENES</h1>
      <div className='row'>
        <div className='col'> 
          <FromImagen /> 
        </div>
        <div className='col'> 
          <FromImagen /> 
        </div>

      </div>
    
      <Link
      className='btnNegro'
        onClick={terminar}
        to='/agradecimiento'
      >
        TERMINAR
      </Link>
    </div>

    
    )

  return (
    <div className='contenido'>
        <h1>Registro</h1>
        <FormRegistro />
    </div>
  )
 
}
