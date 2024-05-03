import React from "react";
import TransactionTable from "./components/TransactionTable";
import TransactionForm from "./components/TransactionForm";
const App = () => {
  return ( 
    <div>
    <TransactionTable/>
    <TransactionForm/>
    </div>
   );
}
 
export default App;