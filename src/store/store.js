import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import { authReducer } from "../reducers/authReducer";
import { cargaReducer } from "../reducers/cargaReducer";
import { participanteReducer } from "../reducers/participanteReducer";




const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    participante: participanteReducer,
    carga: cargaReducer

})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)