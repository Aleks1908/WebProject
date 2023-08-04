/* eslint-disable react/prop-types */
import './category.css'
import shoe from '../../Assets/CategoryImg/shoe.webp'
import clothes from '../../Assets/CategoryImg/clothes.png'
import accessories from '../../Assets/CategoryImg/accessories.png'
import slippers from '../../Assets/CategoryImg/slippers.png'
import hats from '../../Assets/CategoryImg/hats.png'
import limited from '../../Assets/CategoryImg/limited.webp'



const CategoryIcon = ({ img,  category, description, onClick }) => (
  <div
    className="category_option"
    onClick={() => onClick(category, description)}>
    <img src={img} alt={category} />
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
      <CategoryIcon onClick={handleCategoryClick} img={clothes} category="clothes" description = "Description for bags"/>
      <CategoryIcon onClick={handleCategoryClick} img={accessories} category="accessories" description = "Description for shirts"/>
      <CategoryIcon onClick={handleCategoryClick} img={slippers} category="slippers" description = "Description for shorts"/>
      <CategoryIcon onClick={handleCategoryClick} img={hats} category="hats" description = "Description for dresses"/>
      <CategoryIcon onClick={handleCategoryClick} img={limited} category="limited" description = "Description for blazers"/>
    </div>
  );
};

