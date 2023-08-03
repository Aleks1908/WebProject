/* eslint-disable react/prop-types */
import './category.css'
import shoe from './shoe.jpeg'

// eslint-disable-next-line react/prop-types
const CategoryIcon = ({ img,  category, description, onClick }) => (
  <div
    className="category_option"
    onClick={() => onClick(category, description)}>
    <img src={img} alt="" />
    <p>{category.toUpperCase()}</p>
  </div>
  
);


// eslint-disable-next-line react/prop-types
export const Category = ({onCategoryClick}) => {
  const handleCategoryClick =  (category, description) => {
    onCategoryClick(category, description);
    };

  return (
    <div className="category_menu">
      <CategoryIcon onClick={handleCategoryClick} img={shoe} category="shoes" description = "Description for shoes"/>
      <CategoryIcon onClick={handleCategoryClick} img={shoe} category="bags" description = "Description for bags"/>
      <CategoryIcon onClick={handleCategoryClick} img={shoe} category="shirts" description = "Description for shirts"/>
      <CategoryIcon onClick={handleCategoryClick} img={shoe} category="shorts" description = "Description for shorts"/>
      <CategoryIcon onClick={handleCategoryClick} img={shoe} category="dresses" description = "Description for dresses"/>
      <CategoryIcon onClick={handleCategoryClick} img={shoe} category="blazers" description = "Description for blazers"/>
    </div>
  );
};

