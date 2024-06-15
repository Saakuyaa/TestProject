import { FiSearch } from "react-icons/fi";
import './Style.css';


function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
       <div className="containerInput">
        <input
         type="text"
          placeholder="Digite seu CEP..."
         />
          <button className="buttonSearch">
            <FiSearch size={25} color="#FFF"/>
          </button>
       </div>
        <main className="main">
        <h2> CEP: 06434080 </h2>
          <span>Rua teste </span>
          <span>Complemento: Algum complemento</span>
          <span>Jardim Silveira</span>
          <span>Barueri - São Paulo</span>
        </main>
      
    </div>
  );
}

export default App;
