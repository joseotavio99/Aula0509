import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './styles.css';


function App() {

  const [input, setInput] = useState('')


    
  function aoClicar() {
    alert('O que tem dentro do input: ' + input)
  }

  return (
    <div className="container">
      <h1 className="title"> Buscador de Cep</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite aqui..." value={input} onChange={(e) =>setInput(e.target.value)}/>

        <button className="buttonSearch" onClick={aoClicar}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

    <main className="main">
      <h2> Cep :  19970000 </h2>
      <span> Rua : Kathariene </span> 
      <span> Bairro : Kathariene </span> 
      <span> Estado : Kathariene </span> 
    </main>



    </div>
  );
}

export default App;