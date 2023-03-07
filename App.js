import React from 'react';
import Product from './Product';


function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">My Demo Shop</h1>
      <div className="product-container">
        <Product 
          title="Product 1"
          price={10}
          description="First product"
        />
        <Product 
          title="Product 2"
          price={20}
          description="Second product"
        />
      </div>
    </div>
  );
}

export default App;
