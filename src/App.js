import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Entradas from './pages/Entradas/Entradas';
import Principales from './pages/Principales/Principales';
import { Route } from 'wouter';
import { useState, useEffect } from 'react';

function App() {
  

  const [clase, setClase] = useState(true);
  
  let claseP = clase ? 'disabled' : 'avalible';
  
  useEffect(() => {
    setTimeout(() => {
      setClase(true);
    }, 1000)
  }, [claseP]);


  return (
    <div className="App">
      <Header setClase ={setClase}/>
      <p className={claseP}>Proximamente Ensaladas</p>
      <Route path="/"><Entradas/></Route>
      <Route path="/Principales"><Principales/></Route>

    </div>
  );
}

export default App;
