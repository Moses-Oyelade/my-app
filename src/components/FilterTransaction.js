import React,{ useEffect, useState} from 'react'

const FilterTransaction = ({ setTransactions, category}) => {

    const [inputText, setInputText] = useState("")

    function handleFilterChange (e) {
        e.preventDefault();
        console.log(e.target.value)
        setInputText(e.target.value)
    }
        
        useEffect(() => {
          console.log('me here')
        fetch("http://localhost:3000/transactions")
        .then((r) => r.json())
        .then((transactions) => { 
              setTransactions(transactions.filter((transaction) => {
              if((transaction.category).toLowerCase().includes(inputText.toLowerCase())
                )
              return transaction;
            }))  
            return true
        })

        }, [inputText, setTransactions])
        console.log(category)

        // if (!category){
        //   return <h3>Loading...</h3>
        // }

    



  return (
    <div>
        <h3>Filter By Category</h3>
        <div id="filter-search">
            <input type="text"
            name="filter"
            onChange={handleFilterChange}
            value={inputText}
            placeholder="Search..."
            />
       
        </div>
    </div>
  )
}

export default FilterTransaction