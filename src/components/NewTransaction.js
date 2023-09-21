import React, { useState } from 'react'

const NewTransaction = ( {hasChange, setHasChange} ) => {
    
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category:"",
    amount: '',
  });
  

  function handleChange(e){
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    }

  
    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setFormData(values => ({...values, [name]: value}))
    // }


    function handleSubmit (e){
        e.preventDefault();
        setFormData({
            date: "",
            description: "",
            category: "",
            amount:""
        });
        // console.log(formData)
        
          
            fetch ("http://localhost:3000/transactions", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                    
                },
                body: JSON.stringify(formData),
            })
            .then((r) => (r.json()))
            .then((data) => setHasChange((data) => !hasChange ))
            
            // setFormData(data))
      
    };
        

    return (
    <div className="new-transaction">
        <h3>Initiate Transaction</h3>
        <form id ="new-input" onSubmit={handleSubmit}>
            <input
            type= "text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="yy-mm-dd"/>



            <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="description"/>

            <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="category"/>

            <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="amount"/>

            <button id="Submit">Send</button>
        </form>
      
    </div>
    );
}

export default NewTransaction

// {(handleSubmit)=> setFormData(!formData)}