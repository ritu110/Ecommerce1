import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import CSS file

const products = [
    {
        id: 1,
        name: "Shoe",
        image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: "350 INR"
    },
    {
        id: 2,
        name: "Shoe",
        image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: "350 INR"
    },
    {
        id: 3,
        name: "Shoe",
        image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: "350 INR"
    }
]

const ProductLists = () => {
    const navigate = useNavigate();
    const updateProduct = () => {
        navigate('/update-product');
    }
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <button className="update-button" type="button" onClick={updateProduct}>Update</button>
            <button className="delete-button" type="button">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductLists;
