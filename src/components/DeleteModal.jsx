import React from 'react';

// El componente `DeleteModal` es responsable de mostrar un modal de confirmación cuando se quiere eliminar una persona.
// Incluye el nombre de la persona que se va a eliminar y botones para confirmar o cancelar la eliminación.
const DeleteModal = ({ personToDelete, confirmDelete, cancelDelete }) => (
  <div id="deleteModal" className='modal fade' tabIndex="-1">
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>Confirmar Eliminación</h4>
          {/* Botón para cerrar el modal */}
          <button type="button" className='btn-close' data-bs-dismiss="modal" aria-label="Close" onClick={cancelDelete}></button>
        </div>
        <div className='modal-body'>
          {/* Texto de confirmación con el nombre de la persona */}
          <p>¿Estás seguro de eliminar a {personToDelete?.name}?</p>
        </div>
        <div className='modal-footer'>
          {/* Botón para cancelar la eliminación */}
          <button style={{ backgroundColor: 'blue', color: 'white' }} type="button" className='btn btn-secondary' data-bs-dismiss="modal" onClick={cancelDelete}>Cancelar</button>
          {/* Botón para confirmar la eliminación */}
          <button style={{ backgroundColor: 'green', color: 'white' }} type="button" className='btn btn-danger' data-bs-dismiss="modal" onClick={confirmDelete}>Eliminar</button>
        </div>
      </div>
    </div>
  </div>
);

export default DeleteModal;

