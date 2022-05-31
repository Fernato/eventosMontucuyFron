import { useDispatch, useSelector } from 'react-redux'
import { addNewParticipante } from '../../actions/participanteAction';
import { useForm } from '../../hooks/useForm'

import { Link, Navigate, NavLink } from 'react-router-dom'
import { useEffect } from 'react';


export const FormRegistro = () => {

  const dispatch = useDispatch();



   

  const [ participanteValues, handleInputChange ] = useForm({
    cedula:'',
    nombre: '',
    apellidos: '',
    edad:'',
    correo: '',
    celular: '',
    direccion: '',
   
  })

  const { cedula, nombre, apellidos,edad, correo, celular, direccion } = participanteValues

   

  const handleSumit = (e) => {

    e.preventDefault();

    dispatch( addNewParticipante( participanteValues ) )
  }
  
  
  return (
    
    <form onSubmit={handleSumit} encType="multipart/form-data">
        <div className='row mt-5'>
            <div>
                <input
                type='number'
                name='cedula'
                className='form-control'
                placeholder='Cedula'
                autoComplete='off'
                value={cedula}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <input
                type='text'
                name='nombre'
                className='form-control mt-2'
                placeholder='Nombre'
                autoComplete='off'
                value={nombre}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <input
                type='text'
                name='apellidos'
                className='form-control mt-2'
                placeholder='Apellidos'
                autoComplete='off'
                value={apellidos}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <input
                type='number'
                name='edad'
                className='form-control mt-2'
                placeholder='Edad'
                autoComplete='off'
                value={edad}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <input
                type='email'
                name='correo'
                className='form-control mt-2'
                placeholder='Correo'
                autoComplete='off'
                value={correo}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <input
                type='number'
                name='celular'
                className='form-control mt-2'
                placeholder='Celular'
                autoComplete='off'
                value={celular}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <input
                type='text'
                name='direccion'
                className='form-control mt-2'
                placeholder='Direccion'
                autoComplete='off'
                value={direccion}
                onChange={handleInputChange}
                />
            </div>
          </div>


        
            <button 
              className='btn btn-primary mt-5'
              type='submit' 
            >
              Registrarse

            </button>


    </form>
    
 

    )
  
}