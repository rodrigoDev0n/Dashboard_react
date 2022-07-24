import React from 'react';

export const Students = () => {
  return (
    <>
      <div className='students-container'>
        {/* Añadir información de los estudiantes */}
        <div className='searchBar-container'>
          {/* Searchbar */}
          <h3>Estudiantes</h3>
          <input placeholder='Buscar un estudiante'/>
        </div>
        <div className='students-list-container'>
          {/* |> <--> Listado de estudiantes <--> <| */}
        </div>
      </div>
    </>
  )
}
