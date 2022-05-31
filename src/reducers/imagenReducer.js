import { types } from "../types/types"

/*

*/

const initialState = {
    participante: {},
    //id: 0
 
}


export const imagenReducer = (state = initialState, action ) => {

    switch (action.type) {
        case types.imagenParticipante:
            return {
                ...state,
                participante:action.payload
            }
   
        default:
            return state

    }
}