import './category.css'
import shoe from './shoe.jpeg'

// eslint-disable-next-line react/prop-types
const CategoryIcon = ({ img, category, onClick }) => (
  <div
    className="category-option"
    onClick={() => onClick(category)}>
    <img src={img} alt="" />
  </div>
  
);


export const Category = () => {
  const handleColorClick = (selectedCategory) => {
    console.log(`Filtering by category: ${selectedCategory}`);
    // Add your filtering logic here
    // For example, you can update the state with the selected color and use it to filter items in your content
    // ...
  };

  return (
    <div className="category-menu">
      <CategoryIcon onClick={handleColorClick} img={shoe} category="shoes"/>
      <CategoryIcon onClick={handleColorClick} img={shoe}/>
      <CategoryIcon onClick={handleColorClick} img={shoe}/>
      <CategoryIcon onClick={handleColorClick} img={shoe}/>
      <CategoryIcon onClick={handleColorClick} img={shoe}/>
      <CategoryIcon onClick={handleColorClick} img={shoe}/>
    </div>
  );
};

