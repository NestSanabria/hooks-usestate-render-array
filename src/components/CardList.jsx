import React, { useState } from 'react';
import { Person } from './Person';
import EditForm from './EditForm';
import DeleteModal from './DeleteModal';

// El componente `CardList` gestiona la lista de personas y la funcionalidad de editar, crear y eliminar personas.
// Utiliza estados para gestionar la persona que se está editando, la nueva persona y la persona que se va a eliminar.
export const CardList = ({ persons, setPersons }) => {
  // Estado para el ID de la persona que se está editando
  const [editingId, setEditingID] = useState(null);
  // Estado para los datos de la persona que se está editando o creando
  const [editedPerson, setEditedPerson] = useState({ name: '', role: '', img: '' });
  // Estado para controlar si se está editando
  const [isEditing, setIsEditing] = useState(false);
  // Estado para la persona que se va a eliminar
  const [personToDelete, setPersonToDelete] = useState(null);

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPerson(prevState => ({ ...prevState, [name]: value }));
  };

  // Inicia el proceso de edición de una persona
  const handleEdit = (id) => {
    setEditingID(id);
    setIsEditing(true);
    const personToEdit = persons.find(person => person.id === id);
    setEditedPerson({ ...personToEdit });
  };

  // Guarda los cambios de una persona editada
  const handleSave = () => {
    setPersons(persons.map(person => person.id === editingId ? editedPerson : person));
    setEditingID(null);
    setEditedPerson({ name: '', role: '', img: '' });
    setIsEditing(false);
  };

  // Establece la persona que se va a eliminar
  const handleDelete = (id) => {
    setPersonToDelete(id);
  };

  // Confirma la eliminación de una persona
  const confirmDelete = () => {
    setPersons(persons.filter(person => person.id !== personToDelete));
    setPersonToDelete(null);
  };

  // Cancela la eliminación de una persona
  const cancelDelete = () => {
    setPersonToDelete(null);
  };

  // Crea una nueva persona y la añade a la lista
  const handleCreate = () => {
    setPersons([...persons, { id: persons.length + 1, ...editedPerson }]);
    setEditedPerson({ name: '', role: '', img: '' });
  };

  return (
    <div>
      <h2>IT Team</h2>
      <div className='container'>
        <div className='row d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3'>
          {/* Mapea la lista de personas y renderiza una tarjeta para cada una */}
          {persons.map(person => (
            <Person
              key={person.id}
              id={person.id}
              name={person.name}
              role={person.role}
              img={person.img}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      {/* Renderiza el formulario de edición/creación */}
      <EditForm
        isEditing={isEditing}
        editedPerson={editedPerson}
        handleChange={handleChange}
        handleSave={handleSave}
        handleCreate={handleCreate}
      />
      {/* Renderiza el modal de confirmación de eliminación */}
      <DeleteModal
        personToDelete={persons.find(person => person.id === personToDelete)}
        confirmDelete={confirmDelete}
        cancelDelete={cancelDelete}
      />
    </div>
  );
};

