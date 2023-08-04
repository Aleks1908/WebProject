/* eslint-disable react/prop-types */
import "./navigation_desktop.css";
import logo from "../../../Assets/logo.png";

// eslint-disable-next-line react/prop-types
const CategoryLink = ({ category, description, onClick }) => (
  <li
    className="category_option_desk"
    onClick={() => onClick(category, description)}
  >
      <a>{category.toUpperCase()}</a>
  </li>
);

// eslint-disable-next-line react/prop-types
export const NavigationDesktop = ({ onCategoryClick }) => {
  const handleCategoryClick = (category, description) => {
    onCategoryClick(category, description);
  };

  return (
    <div className="navigation_desk">
      <div className="logo_desk">
        <img src={logo} alt="" />
      </div>
      <div className="category_desk">
        <ul>
        <CategoryLink onClick={handleCategoryClick} category="shoes" description = "The shoe category refers to a wide range of footwear products designed to be worn on the feet for various purposes. Shoes are essential accessories that provide protection, support, and comfort during daily activities and special occasions. They come in diverse styles, designs, and materials, catering to different needs and fashion preferences."/>
        <CategoryLink onClick={handleCategoryClick} category="bags" description = "Description for bags"/>
        <CategoryLink onClick={handleCategoryClick} category="shirts" description = "Description for shirts"/>
        <CategoryLink onClick={handleCategoryClick} category="shorts" description = "Description for shorts"/>
        <CategoryLink onClick={handleCategoryClick} category="dresses" description = "Description for dresses"/>
        <CategoryLink onClick={handleCategoryClick} category="blazers" description = "Description for blazers"/>
        </ul> 
      </div>
    </div>
  );
};

