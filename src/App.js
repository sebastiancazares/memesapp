import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

// var nombre = "Sebas";
// var saludo = "Hola Mundo soy";

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value) 
  }

  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value) 
  }

  const onChangeImage = function(evento){
    setImagen(evento.target.value) 
  }

  const onClickExportar = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");
  
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           {saludo}{nombre} <br />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    {/* // Select picker de memes */}

      <select onChange={onChangeImage}>
        <option value="gatitu">Meme gato</option>
        <option value="perrito">Meme perro</option>
        <option value="spongi">Meme bob</option>
        <option value="sis">Meme cara</option>
        <option value="eii">Meme leo</option>
        <option value="stonks">Meme stonks</option>
      </select> <br />

      {/* // Input text - Pimer Linea */}
      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1' /><br />

      {/* // Input text - segunda linea */}
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2' /><br />
      
      {/* // Boton exportar */}
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme">
        <span>{linea1}</span> <br/>
        <span>{linea2}</span> <br/>
        <img src={"/img/" + imagen + ".jpg"} />
      </div>
    
    </div>
  );
}

export default App;
