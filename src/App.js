import React, { useState } from 'react';
import './App.css';
import { CardList } from './components/CardList';

// El componente principal `App` inicializa la lista de personas y la pasa al componente `CardList`.
function App() {
  // Estado para almacenar la lista de personas
  const [persons, setPersons] = useState([
    { id: 1, name: "Oscar Eduardo", role: "Frontend Developer", img: "https://bootdey.com/img/Content/avatar/avatar6.png" },
    { id: 2, name: "Carolina", role: "Backend Developer", img: "https://bootdey.com/img/Content/avatar/avatar3.png" },
    { id: 3, name: "Catalina", role: "UI/UX Designer", img: "https://bootdey.com/img/Content/avatar/avatar8.png" }
  ]);

  return (
    <div className='App'>
      <div className='container'>
        {/* Renderiza el componente `CardList` y le pasa las personas y la función para actualizarlas */}
        <CardList persons={persons} setPersons={setPersons} />
      </div>
    </div>
  );
}

export default App;
