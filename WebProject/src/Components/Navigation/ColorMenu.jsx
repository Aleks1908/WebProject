import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ColorCircle = ({ color, onClick, selected }) => (
    <div
      className={`color-option${selected ? ' selected' : ''}`}
      style={{ backgroundColor: color }}
      onClick={() => onClick(color)}
    />
  );
  
  const FilteringMenu = () => {
    const [selectedColor, setSelectedColor] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [isFilterDisabled, setIsFilterDisabled] = useState(true);
  
    useEffect(() => {
      updateFilterButton();
    }, [selectedColor, minPrice, maxPrice]);
  
    const handleColorClick = (color) => {
      setSelectedColor(color);
    };
  
    const handleMinPriceChange = (e) => {
      setMinPrice(e.target.value);
    };
  
    const handleMaxPriceChange = (e) => {
      setMaxPrice(e.target.value);
    };
  
    const updateFilterButton = () => {
      setIsFilterDisabled(!(selectedColor && minPrice && maxPrice));
    };
  
    const handleFilterClick = () => {
      console.log(`Selected Color: ${selectedColor}`);
      console.log(`Min Price: ${minPrice}, Max Price: ${maxPrice}`);
      // Add your filtering logic here based on color, minPrice, and maxPrice
      // ...
    };
  
    return (
      <div className="filter-menu">
        <div className="color-menu">
        <div className="color-title">
            <p>Filter by Color</p>
        </div>
        <div className="color-selection">
        <ColorCircle
          color="red"
          onClick={handleColorClick}
          selected={selectedColor === 'red'}
        />
        <ColorCircle
          color="blue"
          onClick={handleColorClick}
          selected={selectedColor === 'blue'}
        />
        <ColorCircle
          color="green"
          onClick={handleColorClick}
          selected={selectedColor === 'green'}
        />
        </div>
        
        </div>
        <div className="price-menu">
          <label htmlFor="minPrice">Min Price:</label>
          <input
            type="number"
            id="minPrice"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
  
          <label htmlFor="maxPrice">Max Price:</label>
          <input
            type="number"
            id="maxPrice"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
  
          <button onClick={handleFilterClick} disabled={isFilterDisabled}>
            Filter
          </button>
        </div>
      </div>
    );
  };
  
  export default FilteringMenu;