import React from 'react';

// El componente `EditForm` es responsable de mostrar un formulario para editar o crear una nueva persona.
// Incluye campos para el nombre, el rol y la URL de la imagen de la persona, así como un botón para guardar o crear.
const EditForm = ({ isEditing, editedPerson, handleChange, handleSave, handleCreate }) => (
  <div className="mt-4 row p-2">
    <h2>{isEditing ? 'Modificar Datos' : 'Datos de la Nueva Persona'}</h2>
    {/* Campo para el nombre */}
    <input type="text" name="name" value={editedPerson.name} onChange={handleChange} placeholder='Nombre' className='form-control mb-2' />
    {/* Campo para el rol */}
    <input type="text" name="role" value={editedPerson.role} onChange={handleChange} placeholder='Rol' className='form-control mb-2' />
    {/* Campo para la URL de la imagen */}
    <input type="text" name="img" value={editedPerson.img} onChange={handleChange} placeholder='URL de la imagen' className='form-control mb-2' />
    {/* Botón para guardar o crear la persona */}
    <div className='mt-2'>
      <button className='btn btn-primary' onClick={isEditing ? handleSave : handleCreate}>{isEditing ? 'Guardar' : 'Crear'}</button>
    </div>
  </div>
);

export default EditForm;

