import React from 'react';
import products from '../data/productData';      // ✅ adjust path if different
import { Link } from 'react-router-dom';

export default function ProductList() {          // <-- default export right here
  return (
    <section className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          {/* image, name, price */}
          <h3>{product.title}</h3>
          <p>${product.price}</p>

          {/* View Details link */}
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </section>
  );
}
