/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import{ useState, useEffect } from "react";
import './filtering_menu.css';

const ColorCircle = ({ color, hexcolor, onClick, selected }) => {
  const handleColorClick = () => {
    onClick(color, hexcolor);
  };

  return (
    <div
      className={`color-option${selected ? ' selected' : ''}`}
      style={{ backgroundColor: hexcolor }}
      onClick={handleColorClick}
    />
  );
};

const FilteringMenu = ({ onFilterClick }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedHexColor, setSelectedHexColor] = useState('');

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [isFilterDisabled, setIsFilterDisabled] = useState(true);

  useEffect(() => {
    updateFilterButton();
  }, [selectedColor, minPrice, maxPrice]);

  const handleFilterClick = () => {
    onFilterClick(selectedColor, minPrice, maxPrice);
  };

  const handleColorClick = (color, hexcolor) => {
    setSelectedColor(color);
    setSelectedHexColor(hexcolor);
  };

const handleMinPriceChange = (e) => {
  const newMinPrice = e.target.value ? Number(e.target.value) : ''; 

  if (newMinPrice === '') {
    setMinPrice(newMinPrice);
  } else if (newMinPrice >= maxPrice - priceGap) {
    setMinPrice(maxPrice - priceGap);
  } else if (newMinPrice < 0) {
    setMinPrice(0);
  } else {
    setMinPrice(newMinPrice);
  }
};

const handleMaxPriceChange = (e) => {
  const newMaxPrice = e.target.value ? Number(e.target.value) : ''; // Handle empty input

  if (newMaxPrice === '') {
    setMaxPrice(newMaxPrice);
  } else if (newMaxPrice <= minPrice + priceGap) {
    setMaxPrice(minPrice + priceGap);
  } else if (newMaxPrice > rangeInputMax) {
    setMaxPrice(rangeInputMax);
  } else {
    setMaxPrice(newMaxPrice);
  }
};
  const updateFilterButton = () => {
    setIsFilterDisabled(!(selectedColor && minPrice && maxPrice));
  };

  const rangeInputMax = 1000;
  const priceGap = 10;

  const calculateRangeLeft = () => {
    return ((minPrice / rangeInputMax) * 100) + "%";
  };

  const calculateRangeRight = () => {
    return 100 - ((maxPrice / rangeInputMax) * 100) + "%";
  };

  return (
    <div className="filter-menu">
      <div className="color-menu">
            <div className="filter-title">
                <p>Filter by Color</p>
            </div>
            <div className="color-selection">
            <ColorCircle
            color="red"
            hexcolor="#db362a"
            onClick={handleColorClick}
            selected={selectedHexColor === '#db362a'}
            />
            <ColorCircle
            color="orange"
            hexcolor="#d47c17"
            onClick={handleColorClick}
            selected={selectedHexColor === '#d47c17'}
            />
            <ColorCircle
            color="yellow"
            hexcolor="#f0de3e"
            onClick={handleColorClick}
            selected={selectedHexColor === '#f0de3e'}
            />
            <ColorCircle
            color="green"
            hexcolor="#32c21f"
            onClick={handleColorClick}
            selected={selectedHexColor === '#32c21f'}
            />
            <ColorCircle
            color="blue"
            hexcolor="#1063e0"
            onClick={handleColorClick}
            selected={selectedHexColor === '#1063e0'}
            />
            <ColorCircle
            color="indigo"
            hexcolor="#330099"
            onClick={handleColorClick}
            selected={selectedHexColor === '#330099'}
            />
            <ColorCircle
            color="violet"
            hexcolor="#9410e0"
            onClick={handleColorClick}
            selected={selectedHexColor === '#9410e0'}
            />
          </div>
      </div>
      <div className="price-menu">
      <div className="filter-title">
            <p>Filter by Price</p>
      </div>
        <div className="price-input">
          <div className="field">
            <span>Min</span>
            <input
              type="number"
              className="input-min"
              name="minPrice"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
          </div>
          <div className="separator">-</div>
          <div className="field">
            <span>Max</span>
            <input
              type="number"
              className="input-max"
              name="maxPrice"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
        <div className="slider">
          <div
            className="progress"
            style={{ left: calculateRangeLeft(), right: calculateRangeRight() }}
          ></div>
          <div className="range-input">
            <input
              type="range"
              className="range-min"
              
              max={rangeInputMax}
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <input
              type="range"
              className="range-max"
              max={rangeInputMax}
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
        <button onClick={handleFilterClick} disabled={isFilterDisabled}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilteringMenu;
