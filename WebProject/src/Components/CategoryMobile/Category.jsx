import './category.css'
import shoe from './shoe.jpeg'

// eslint-disable-next-line react/prop-types
const CategoryIcon = ({ img,  category, description, onClick }) => (
  <div
    className="category-option"
    onClick={() => onClick(category, description)}>
    <img src={img} alt="" />
  </div>
  
);


// eslint-disable-next-line react/prop-types
export const Category = ({onCategoryClick}) => {
  const handleCategoryClick =  (category, description) => {
    onCategoryClick(category, description);
    };

  return (
    <div className="category-menu">
      <CategoryIcon onClick={handleCategoryClick} img={shoe} category="shoes" description = "Description for shoes"/>
      <CategoryIcon onClick={handleCategoryClick} img={shoe} category="bags" description = "Description for bags"/>
      <CategoryIcon onClick={handleCategoryClick} img={shoe}/>
      <CategoryIcon onClick={handleCategoryClick} img={shoe}/>
      <CategoryIcon onClick={handleCategoryClick} img={shoe}/>
      <CategoryIcon onClick={handleCategoryClick} img={shoe}/>
    </div>
  );
};

