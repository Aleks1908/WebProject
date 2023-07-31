import "./product_section.css"
import { useEffect, useState } from "react";




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
  // eslint-disable-next-line react/prop-types
  export const ProductSection = ({selectedCategory}) => {
    const [products, setProducts] = useState([]);
    const [productsToShow, setProductsToShow] = useState(5);

  
    useEffect(() => {
      // Fetch the JSON data when the component mounts
      fetch('/SampleData.json')
        .then((response) => response.json())
        .then((data) => setProducts(data.products))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    // Define the categories you want to display
  
    // Filter products based on their categories
    const filteredProducts = products.filter((product) =>
    // eslint-disable-next-line react/prop-types
    selectedCategory.includes(product.category)
    );

    const limitedProducts = filteredProducts.slice(0, productsToShow);

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
        {productsToShow < filteredProducts.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
      </div>
    );
  };
  