import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { subirArchivo } from '../../actions/imagenAction';
import { useForm } from '../../hooks/useForm'



export const FromImagen = () => {

    const dispatch = useDispatch();

    const {participante} = useSelector(state=> state.imagen)
    const {_id} = participante

    const [imagen, setImagen] = useState({
        
        img : new File([], 'imagen'),
        url:''
    })
   
    const handleImg = (e) => {

        let img = e.target.files[0]
        let url = URL.createObjectURL(img)

        setImagen( {
            ...imagen,
            img,
            url
        }) 
    }

    const [imagen_002, setImagen_002] = useState({
        
        img : new File([], 'imagen'),
        url:''
    })


    const [ imagenValues, handleInputChange ] = useForm({
       titulo: '',
       descripcion: '',
       lugar: '',
       id: ''
       
      })
    
    const { 
        titulo,
        descripcion,
        lugar
    } = imagenValues



    const handleSumit = (e) => {

    e.preventDefault();

    if(imagen.url){

        dispatch(subirArchivo( imagenValues, imagen.img, _id))
    }else{

        Swal.fire({
        title: 'Error!',
        text: `No ha escogido una imagen`,
        icon: 'error',
        confirmButtonText: 'Cool'
        })    
    }

    }

  return (
   <form  
    className='contenido'
   onSubmit={handleSumit}>
            <div className='row mt-5'>
                <div className='col imagenMuestra'>
                    
                    <div>
                        <input
                        type='text'
                        name='titulo'
                        className='form-control'
                        placeholder='Titulo'
                        autoComplete='off'
                        value={titulo}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <input
                        type='text'
                        name='lugar'
                        className='form-control'
                        placeholder='Lugar'
                        autoComplete='off'
                        value={lugar}
                        onChange={handleInputChange}
                        />
                    </div>
                    

                    <div>
                        <input
                        type='file'
                        name='imagen'
                        className='form-control mt-2'
                        onChange={handleImg}
                        />
                    </div>
                    <img 
                    className='muestraImagen mt-2'
                        src={imagen.url}
                    />

                    <div>
                        <textarea
                        type='text'
                        name='descripcion'
                        className='form-control mt-2'
                        placeholder='Descripcion'
                        autoComplete='off'
                        value={descripcion}
                        onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>

            <button 
              className='btn btn-primary mt-5'
              type='submit' 
            >
              Subir Imagen

            </button>
        
    </form>
  )
}
