import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewParticipante } from '../../actions/participanteAction';
import { useForm } from '../../hooks/useForm'

export const FormRegistro = () => {

  const dispatch = useDispatch();

  const [ participanteValues, handleInputChange ] = useForm({
    cedula:'',
    nombre: '',
    apellidos: ''

  })

  const { cedula, nombre, apellidos } = participanteValues

  const handleSumit = (e) => {

    e.preventDefault();
    dispatch( addNewParticipante( participanteValues ) )
    

  }
  
  return (
    <form onSubmit={handleSumit}>
        <div className='row'>
          <div>
              <input
              type='text'
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
        </div>
        <button 
          className='btn btn-primary mt-2'
          type='submit'  
        >
          Registrarse

        </button>
    </form>
  )
}
