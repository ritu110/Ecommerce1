import React, { useState } from 'react';
import AddProduct from "./AddProduct";
import '../App.css'; // Import CSS file

const ProductForm = () => {
    const [isFormClosed, setFormClosed] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new product object
    const newProduct = {
      name: name,
      price: price,
      image: image
    };
    // Pass the new product to the parent component
    onAddProduct(newProduct);
    // Clear the form fields
    setName('');
    setPrice('');
    setImage('');
  };

  const closeForm = () => {
    setFormClosed(!isFormClosed);
  }

  return (
    <>
    {
        isFormClosed ?
        <AddProduct /> :
        <form onSubmit={handleSubmit} className="product-form">
      <h2>Add New Product</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="add-button">Add</button>
      <button type="button" className="close-button" onClick={closeForm}>Close</button>
    </form>
    }
    </>
  );
};

export default ProductForm;
