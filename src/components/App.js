import React, {useState, useEffect} from "react"
import TransList from "./TransList";
import NewTransaction from "./NewTransaction";
import FilterTransaction from "./FilterTransaction";
import Header from "./Header";
// import Bal from "./Bal";
import "./App.css";



function App() {
const [transactions, setTransactions] = useState([]);
const [hasChange, setHasChange] = useState(false)

useEffect(() => {
  fetch("http://localhost:3000/transactions")
  .then((r)=> r.json())
  .then((transactions) => setTransactions(transactions))

},[hasChange]);

  
  return (
    <div className="App">
      
        <Header/>
        {/* <Bal/> */}
      
    

      <NewTransaction hasChange={hasChange}
      setHasChange={setHasChange}/>

      <FilterTransaction hasChange={hasChange}
      setHasChange={setHasChange}
      setTransactions={setTransactions}/>

      <TransList transactions={transactions}
      hasChange={hasChange} setHasChange={setHasChange} />

    </div>
  )
}

export default App