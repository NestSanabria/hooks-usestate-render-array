import React from 'react';

// El componente `EditForm` es responsable de mostrar un formulario para editar o crear una nueva persona.
// Incluye campos para el nombre, el rol y la URL de la imagen de la persona, así como un botón para guardar o crear.
const EditForm = ({ isEditing, editedPerson, handleChange, handleSave, handleCreate }) => {
  // Función para manejar la creación de un nuevo empleado
  const handleCreateEmployee = () => {
    // Verificar que los campos obligatorios estén llenos
    if (!editedPerson.name || !editedPerson.role || !editedPerson.gender) {
      alert('Por favor completa todos los campos obligatorios: Nombre, Rol y Género.');
      return; // Detener la creación si falta algún campo obligatorio
    }
    // Llamar a la función handleCreate solo si todos los campos están llenos
    handleCreate();
  };

  return (
    <div className="mt-4 row p-2">
      <h2>{isEditing ? 'Modificar Datos' : 'Ingresar nuevo empleado'}</h2>
      {/* Campo para el nombre */}
        <input type="text" name="name" value={editedPerson.name} onChange={handleChange} placeholder='Escribe tu nombre' className='form-control mb-2' />
      {/* Campo para el rol */}
      <select style={{ backgroundColor: 'blue', color: 'white' }} name="role" value={editedPerson.role} onChange={handleChange} className='form-control mb-2'>
        <option value="">Seleccione Rol</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
        <option value="DevOps Engineer">DevOps Engineer</option>
        <option value="Data Scientist">Data Scientist</option>
      </select>
      {/* Campo para el género */}
      <select style={{ backgroundColor: 'blue', color: 'white' }} name="gender" value={editedPerson.gender} onChange={handleChange} className='form-control mb-2'>
        <option value="">Seleccione Género</option>
        <option value="hombre">Hombre</option>
        <option value="mujer">Mujer</option>
      </select>
      {/* Botón para guardar o crear la persona */}
      <div className='mt-2'>
        <button style={{ backgroundColor: 'blue', color: 'white', border: '2px solid green' }} className='btn btn-primary' onClick={isEditing ? handleSave : handleCreateEmployee}>{isEditing ? 'Guardar' : 'Crear'}</button>
      </div>
    </div>
  );
};

export default EditForm;
