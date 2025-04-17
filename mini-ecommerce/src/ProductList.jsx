import React, { useState } from "react";
import useProducts from "./useProducts";
import "./App.css"; 

const ProductList = () => {
  const { products, loading, deleteProduct } = useProducts(
    "https://fakestoreapi.com/products"
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  if (loading) return <p>Loading...</p>;

  // Filter by search term
  const filteredProducts = products
    .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "high") return b.price - a.price;
      if (sortOrder === "low") return a.price - b.price;
      return 0;
    });

  return (
    <div className="product-container">
      {/* Search Input and Filter Dropdown */}
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select onChange={(e) => setSortOrder(e.target.value)} className="filter-dropdown">
          <option value="">Sort by Price</option>
          <option value="high">High to Low</option>
          <option value="low">Low to High</option>
        </select>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid-container">
          {filteredProducts.map((p) => (
            <div key={p.id} className="card">
              <img src={p.image} alt={p.title} className="product-image" />
              <div className="card-content">
                <h3>{p.title}</h3>
                <p>${p.price}</p>
                <button className="delete-btn" onClick={() => deleteProduct(p.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
