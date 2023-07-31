import shoe from "./shoe.jpeg"
import "./product_section.css"


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

export const ProductSection = () => {
    return(
        <div className="product_section">
            <h1>Product</h1>
            <div className="product_grid">
                <Product name="Nike Jordan" description="Nice shoes" img={shoe} price = '200' stars= "5" />
                <Product name="Nike Jordan" description="Nice shoes" img={shoe} price = '200' stars= "5" />
                <Product name="Nike Jordan" description="Nice shoes" img={shoe} price = '200' stars= "5" />
                <Product name="Nike Jordan" description="Nice shoes" img={shoe} price = '200' stars= "5" />
                <Product name="Nike Jordan" description="Nice shoes" img={shoe} price = '200' stars= "5" />
                <Product name="Nike Jordan" description="Nice shoes" img={shoe} price = '200' stars= "5" />
                <Product name="Nike Jordan" description="Nice shoes" img={shoe} price = '200' stars= "5" />

            </div>
        </div>
    )
}