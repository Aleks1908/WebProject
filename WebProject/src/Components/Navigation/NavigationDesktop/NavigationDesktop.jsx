import "./navigation_desktop.css";
import logo from "./logo.png";

// eslint-disable-next-line react/prop-types
const CategoryLink = ({ category, description, onClick }) => (
  <div
    className="category_option_desk"
    onClick={() => onClick(category, description)}
  >
    <p>{category}</p>
  </div>
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
        <CategoryLink onClick={handleCategoryClick} category="shoes" description = "Description for shoes"/>
        <CategoryLink onClick={handleCategoryClick} category="bags" description = "Description for bags"/>
        <CategoryLink onClick={handleCategoryClick} category="shirts" description = "Description for shirts"/>
        <CategoryLink onClick={handleCategoryClick} category="shorts" description = "Description for shorts"/>
        <CategoryLink onClick={handleCategoryClick} category="dresses" description = "Description for dresses"/>
        <CategoryLink onClick={handleCategoryClick} category="blazers" description = "Description for blazers"/>
      </div>
    </div>
  );
};

