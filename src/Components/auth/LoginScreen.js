import React from 'react'
import { useDispatch } from 'react-redux'
import { loginAuth } from '../../actions/authAction';
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [ loginValues, handleInputChange ] = useForm({
    usuario:'',
    password: ''
  })

  const { usuario, password } = loginValues

  const handleSumit = (e) => {
    e.preventDefault();
    dispatch(loginAuth())
  }

  return (
    <form 
      className='formLogin'
      onSubmit={handleSumit}
    >

        <input
        type='text'
        name='usuario'
        className='form-control'
        placeholder='Usuario'
        autoComplete='off'
        value={usuario}
        onChange={handleInputChange}
        />
         <input
        type='text'
        name='password'
        className='form-control mt-2'
        placeholder='Contraseña'
        autoComplete='off'
        value={password}
        onChange={handleInputChange}
        />

        <button 
          className='btn btn-warning mt-2'
          type='submit'  
          
        >
          Ingresar

        </button>

    </form>
  )
}
