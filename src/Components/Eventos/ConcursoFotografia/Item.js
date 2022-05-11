import React from 'react'

export const Item = ({imagePath, titulo, parrafo}) => {
  return (
    <div className="item">
        <div className="row g-0">
          <div className="row imagen">
            <img src={imagePath} alt={imagePath} ></img>
          </div>
          <div className="row">
            <div className="card-body">
              
             <h5 className="itemtitulo">{titulo}</h5>
              <p className="itemtext"><small className="text-muted">{parrafo}</small></p>
            </div>
          </div>
        </div>
      </div>
  )
}
