
import './App.css';
import Cart from './components/Cart';
import Item from './components/item';


function App() {


  return (
    <div className="App">
      <Item name="MackBook Pro" price={200000}/>
      <Item name="Pendrive" price={100}/>
      <Item name="Mobile" price={3500}/>
      <Cart/>
    </div>
  );
}

export default App;
