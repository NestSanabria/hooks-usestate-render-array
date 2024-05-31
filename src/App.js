import React, { useState } from 'react';
import './App.css';
import { CardList } from './components/CardList';
import HombreImg from './images/Hombre.jpg';
import MujerImg from './images/Mujer.jpg';

// El componente principal `App` inicializa la lista de personas y la pasa al componente `CardList`.
function App() {
  // Estado para almacenar la lista de personas
  const [persons, setPersons] = useState([
    { id: 1, name: "Oscar Eduardo", role: "Frontend Developer", img: HombreImg },
    { id: 2, name: "Valentina", role: "Backend Developer", img: MujerImg },
    { id: 3, name: "Catalina", role: "UI/UX Designer", img: MujerImg }
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
