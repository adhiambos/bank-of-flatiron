

import './App.css';
import AddTransaction from './components/AddTransaction';
import Search from './components/Search';
import Table from './components/Table';


function App() {
  return (
    <div className="App">
    <Search/>
    <AddTransaction/>
    <Table/>
    
     
    </div>
  );
}

export default App;
