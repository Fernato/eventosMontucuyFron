import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getParticipantes } from '../../actions/participanteAction';

export const TablaParticipantes = () => {

    const dispatch = useDispatch();

    const {participantes} = useSelector(state => state.participante)

    useEffect(() => {
        let isApiSubscribed =true;
        if(isApiSubscribed){
            dispatch(getParticipantes());
        }
         return () => {
            isApiSubscribed = false;
         }
       }, [dispatch])

  return (
    <>
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>Cedula</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                </tr>     
            </thead>
            <tbody>
                {participantes.map(par => {
                    return(
                        <tr  key={par.cedula}>
                            <td>{par.cedula}</td>
                            <td>{par.nombre}</td>
                            <td>{par.apellidos}</td>
                            {/*
                            <td>
                                <button
                                    className='btn btn-secondary'
                                    onClick={()=>handleGetActividad(par)}
                                >
                                    Editar
                                </button>
                            </td>
                    */}
                        </tr>
                        
                    );
                })

                }

            </tbody>
        
        </table>
    </>
  )
}
