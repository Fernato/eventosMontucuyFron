import React from 'react'

export const Item = ({imagen, titulo, lema, parrafo}) => {
  return (
    <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
             <h5 className="card-title">{titulo}</h5>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              
              <p className="card-text">{lema}</p>
              <p className="card-text"><small className="text-muted">{parrafo}</small></p>
            </div>
          </div>
        </div>
      </div>
  )
}
