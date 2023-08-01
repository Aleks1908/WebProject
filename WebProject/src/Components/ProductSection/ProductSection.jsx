/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./product_section.css";

// eslint-disable-next-line react/prop-types
const Product = ({ name, description, img, stars, price }) => {
  return (
    <div className="product_box">
      <div className="product_img">
        <img src={img} alt="" />
      </div>
      <div className="product_stars">
        <p>{stars}</p>
      </div>
      <div className="product_name">
        <p>{name}</p>
      </div>
      <div className="product_description">
        <p>{description}</p>
      </div>
      <div className="product_info">
          <div className="product_price">
              <p>{price}</p>
          </div>
          <div className="buy_btn">
              <a href="">Buy Now</a>
          </div>
      </div>
    </div>
  );

};

export const ProductSection = ({ selectedCategory, filteredState, sortedState }) => {
  const [products, setProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState(5);

  useEffect(() => {
    fetch('/SampleData.json')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching data:', error));
      console.log(sortedState)
  }, [selectedCategory, filteredState, sortedState]);

  // Filter products based on their categories and selected color
  let categorisedProducts = products.filter((product) =>
    selectedCategory.includes(product.category) &&
    (!filteredState || product.color === filteredState.color) && 
    (!filteredState || product.price >= filteredState.minPrice) &&
    (!filteredState || product.price <= filteredState.maxPrice)
  );

  let limitedProducts = categorisedProducts.slice(0, productsToShow);

  if(sortedState){
    // limitedProducts = [...limitedProducts].sort((a, b) => b.price - a.price);
    limitedProducts = [...limitedProducts].sort((a, b) => b.name.localeCompare(a.name));

  }

  const handleLoadMore = () => {
    setProductsToShow(prevProductsToShow => prevProductsToShow + 5);
  };

  return (
    <div className="product_section">
      <h1>Product</h1>
      <div className="product_grid">
        {/* Map through filtered products and render Product component for each product */}
        {limitedProducts.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            img={product.image}
            stars={product.stars}
            price={product.price}
          />
        ))}
      </div>
      {productsToShow < categorisedProducts.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};
