import Swal from "sweetalert2"
import { fetchImagen } from "../helpers/fetch"
import { types } from "../types/types"
import { Cargado, Cargando } from "./carga"

export const imagenParticipante = (participante) => ({
    type: types.imagenParticipante,
    payload: participante
})


export const subirArchivo =  (data, file, _id ) => {
    return async(dispatch) => {
        dispatch( Cargando() )

        try {
    
            const respuesta = await fetchImagen(data, file, _id)
             dispatch(Cargado())
            const body = await respuesta.json()
    
            if(body.ok){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })

                  
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Registro Exitoso'
                  })
            }
            
        } catch (error) {
            console.log(error)
            
        }
    }


}