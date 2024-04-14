import React, { useState } from 'react';
import ProductForm from './ProductForm';
import '../App.css'; // Import CSS file
const AddProduct = () => {
    const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return <>
    {
        showForm ?
        <ProductForm /> :
        <div className="add-product-container">      
        <button className="add-product-button" onClick={toggleForm}>Add Product</button>
    </div>
    }
  </>
};

export default AddProduct;

