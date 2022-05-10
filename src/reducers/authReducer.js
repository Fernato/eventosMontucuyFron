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
    login: false
}


export const authReducer = (state = initialState, action ) => {

    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                login: true
            }
        case types.authLogout: 
        return {
            ...state,
            login: false
        }
        
       
        default:
            return state
            break;
    }
}