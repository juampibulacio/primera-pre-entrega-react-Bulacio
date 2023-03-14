
import './App.css';
import Navbar from './componentes/navbar';
import ItemListContainer from './componentes/itemListContainer';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <ItemListContainer greetings="bienvenido"/>
    </div>
  );
}

export default App;

