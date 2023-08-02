/* eslint-disable react/prop-types */
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';


import { useEffect, useState } from "react";
import "./product_section.css";

// eslint-disable-next-line react/prop-types
const Product = ({ name, description, img, stars, price, sale }) => {
  console.log(sale);
  const hasSale = typeof sale === "number" && sale < price;

  return (
    <div className="product_box">
      <div className="product_img">
        <img src={img} alt="" />
      </div>
      <div className="product_name">
        <p>{name}</p>
      </div>
      <div className="product_description">
        <p>{description}</p>
      </div>
      <div className="product_stars">
        <Stars count={stars} />
      </div>
      <div className="product_info">
        <div className={`product_price ${hasSale ? "sale" : ""}`}>
          {hasSale && (
            <>
              <p className="original_price">${price}</p>
              <p className="discounted_price">${sale}</p>
            </>
          )}
          {!hasSale && <p>${price}</p>}
        </div>
        <div className="buy_btn">
          <a href="">Buy Now</a>
        </div>
      </div>
    </div>
  );
};





const Stars = ({ count }) => {
  const filledStars = Array.from({ length: count }, (_, index) => (
    <span key={index} className="star filled"><AiFillStar/></span>
  ));

  const emptyStars = Array.from({ length: 5 - count }, (_, index) => (
    <span key={index} className="star empty"><AiOutlineStar/></span>
  ));

  return (
    <div className="stars">
      {filledStars}
      {emptyStars}
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
  }, [selectedCategory, filteredState, sortedState]);

  // Filter products based on their categories and selected color
  const productsWithEffectivePrice = products.map((product) => ({
    ...product,
    effectivePrice: product.sale !== undefined ? product.sale : product.price,
  }));

  // Filter products based on their categories, selected color, and effectivePrice
  let categorisedProducts = productsWithEffectivePrice.filter((product) =>
    selectedCategory.includes(product.category) &&
    (!filteredState || product.color === filteredState.color) &&
    (!filteredState || product.effectivePrice >= filteredState.minPrice) &&
    (!filteredState || product.effectivePrice <= filteredState.maxPrice)
  );

  let limitedProducts = categorisedProducts.slice(0, productsToShow);

  if (sortedState) {
    if (sortedState === "price-asc") {
      limitedProducts = [...limitedProducts].sort((a, b) => a.effectivePrice - b.effectivePrice);
    }
    if (sortedState === "price-des") {
      limitedProducts = [...limitedProducts].sort((a, b) => b.effectivePrice - a.effectivePrice);
    }
    if (sortedState === "alphabetical") {
      limitedProducts = [...limitedProducts].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortedState === "alphabetical-rev") {
      limitedProducts = [...limitedProducts].sort((a, b) => b.name.localeCompare(a.name));
    }
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
            sale={product.sale}
          />
        ))}
      </div>
      {productsToShow < categorisedProducts.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};
