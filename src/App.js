import './App.css';
import Boton from './contenedor/Botones';
import Pantalla from './contenedor/pantalla';
import Clear from './contenedor/clear';
import { useState } from "react"
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState(""); 

  const actualizarPantalla = val =>{
    setInput(input + val)
  };

  const calcular = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      setInput("Ingrese valores");
    }
    
  };

  return (
    <div className="App">
      <h1 className="titulo">Basic Calculator</h1>

      <div className="contenedor-calcu">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClick ={actualizarPantalla}>7</Boton>
          <Boton manejarClick ={actualizarPantalla}>8</Boton>
          <Boton manejarClick ={actualizarPantalla}>9</Boton>
          <Boton manejarClick ={actualizarPantalla}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick ={actualizarPantalla}>4</Boton>
          <Boton manejarClick ={actualizarPantalla}>5</Boton>
          <Boton manejarClick ={actualizarPantalla}>6</Boton>
          <Boton manejarClick ={actualizarPantalla}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick ={actualizarPantalla}>1</Boton>
          <Boton manejarClick ={actualizarPantalla}>2</Boton>
          <Boton manejarClick ={actualizarPantalla}>3</Boton>
          <Boton manejarClick ={actualizarPantalla}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick ={calcular}>=</Boton>
          <Boton manejarClick ={actualizarPantalla}>0</Boton>
          <Boton manejarClick ={actualizarPantalla}>.</Boton>
          <Boton manejarClick ={actualizarPantalla}>+</Boton>
        </div>
        <div className="fila">
          <Clear limpiar = { () => setInput("")}>
            Clear
          </Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
