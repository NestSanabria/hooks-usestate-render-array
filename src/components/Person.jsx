import React from 'react';

// El componente `Person` es responsable de mostrar una tarjeta con la información de una persona,
// incluyendo su nombre, rol y una imagen, así como botones para editar y eliminar la persona.
export const Person = ({ id, name, role, img, handleEdit, handleDelete }) => (
  <div className="row">
    <div className="card" style={{ width: "18rem", backgroundColor: "#f0f0f0" }}>
      <div>
        {/* Imagen de la persona */}
        <img src={img} className="card-img-top" alt={name} />
      </div>
      <div className="card-body">
        <div>{/* Título con el nombre de la persona */}
          <h5 className="card-title">{name}</h5>
        </div>
        <div>{/* Texto con el rol de la persona */}
          <p className="card-text">{role}</p>
        </div>
        <div className="d-flex justify-content-evenly">{/* Contenedor flex para alinear los botones a la izquierda */}
          {/* Botón para editar la persona */}
          <button style={{ backgroundColor: 'blue', color: 'white' }} className="btn btn-success me-2" onClick={() => handleEdit(id)}>Editar</button>
          {/* Botón para eliminar la persona */}
          <button className="btn btn-danger" onClick={() => handleDelete(id)} data-bs-toggle="modal" data-bs-target="#deleteModal">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
);
