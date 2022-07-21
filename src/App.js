import './App.css';
import Data from "./data.json"
import Titulo from './componetes/titulo';
import Rodape from './componetes/rodape.js'
import Barragrafico from'./componetes/barraGrafico.js'
import Label from './componetes/label.js'
console.table(Data)

function App() {
  return (
    <div className="App">
      <Titulo className="cabecalho"></Titulo>
      <article id='corpo'>
        <h1 id='titulocabeca'>Spending - Last 7 days</h1>
        <Barragrafico></Barragrafico>
        <Label></Label>
        <hr></hr>
        <Rodape></Rodape>
      </article>
      <br></br>
        <div>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
         Coded by <a href="https://github.com/TorugoH">Vitor Hugo Silva Ribeiro</a>.
        </div>
    </div>
  );
}

export default App;
