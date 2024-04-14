import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import '../App.css'; // Import CSS file

const ProductForm = () => {
    const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
        <form onSubmit={handleSubmit} className="product-form">
      <h2>Update Existing Product</h2>
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
      <button type="submit" className="add-button">Update Product</button>
      <button type="button" onClick={() => navigate('/')} className="add-button">Go Back</button>
    </form>
  );
};

export default ProductForm;
