import React, {useState} from 'react'

const NewTransaction = () => {
  
    const [errors, setErrors] = useState([]);
    
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category:"",
    amount: 0,
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

        if(formData.length > 0){
            setFormData('');
        
          
            fetch ("http://localhost:3000/transactions", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(formData),
            })
            .then((r) => console.log (r.json()))
            .then((data) => setFormData(data.formData))
            
            setErrors([]);
        } else {
          setErrors(["Input an Item!"])
        }
        return
    
    };
        

    return (
    <div className="new-transaction">
        <h3>Initiate Transaction</h3>
        <form id ="new-input" onSubmit={handleSubmit}>
            <input
            type='new Date()'
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
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="amount"/>

            <button id="Submit">Send</button>
        </form>
        {errors.length > 0
      ? errors.map((error, index) => (
        <p key={index} style={{color: "red" }}>
          {error}
        </p>
        ))
      : null}

    </div>
    );
}

export default NewTransaction

// {(handleSubmit)=> setFormData(!formData)}