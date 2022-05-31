import { fetchImagen, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"
import { Cargado, Cargando } from "./carga"
import Swal from "sweetalert2";
import { imagenParticipante } from "./imagenAction";

export const addNewParticipante = ( participante ) => {

    return async ( dispatch ) => {
        try {
            dispatch( Cargando() )


            const respuesta = await fetchSinToken('participante/new', participante , 'POST')
            const body = await respuesta.json();
            dispatch(Cargado())
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
                  dispatch(imagenParticipante(body.participante))
                dispatch(addParticipante(participante))
                
          
 
            }else{

                Swal.fire({
                title: 'Error!',
                text: `${body.errors.cedula.msg}`,
                icon: 'error',
                confirmButtonText: 'Cool'
                })    
            }
        } catch (error) {
            console.log(error)
        }
    }

}





const addParticipante = ( participante ) => ({
    type: types.participanteAdd,
    payload: participante
})

export const getParticipantes = () => {
    return async ( dispatch ) => {
        try {
            dispatch( Cargando() )
            const respuesta = await fetchSinToken('participante')
            const body = await respuesta.json();
            dispatch(Cargado())
            if(body.ok){

                dispatch(Participantes(body.participantes))
            }

        } catch (error) {
            console.log(error)
            
        }
    }
}

const Participantes = ( participantes ) => ({
    type: types.participanteGets,
    payload: participantes
})
