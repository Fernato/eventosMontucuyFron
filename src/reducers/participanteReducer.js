import { types } from "../types/types"

/*
    {
        descripcion: '',
        unidad: '',
        precio_unitario: '',
        cantidad_min: '',
        cantidad_max: ''
    }

*/

const initialState = {
    participantes: [],
    //id: 0
 
}


export const participanteReducer = (state = initialState, action ) => {

    switch (action.type) {
        case types.participanteAdd:
            return {
                ...state,
                participantes: [
                    ...state.participantes,
                    action.payload
                ]
            }
       
        case types.participanteGets:
            return{
                ...state,
                participantes: [ ...action.payload ]
            }
/* 
        case types.idActividad:
            return{
                ...state,
                id: action.payload
            }
    */   
        default:
            return state
            break;
    }
}