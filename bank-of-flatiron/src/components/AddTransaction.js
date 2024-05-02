import React, { useState } from 'react';


const AddTransaction = ({ onAdd }) => {
  const [transaction, setTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {
    setTransaction({...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(transaction);
    setTransaction({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  return (
    <form className="AddTransaction" onSubmit={handleSubmit}>
      <div className="TransactionDetails">
        <input type="date" name="date" onChange={handleChange} />
        <input type="text" placeholder="Description" name="description" onChange={handleChange} />
        <input type="text" placeholder="Category" name="category" onChange={handleChange} />
        <input type="text" placeholder="Amount" name="amount" onChange={handleChange} />
      </div>
      <div className="AddForm">
        <input type="submit" value="Add Transaction" />
      </div>
    </form>
  );
};

export default AddTransaction;