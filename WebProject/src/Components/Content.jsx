import { NavigationMobile } from './Navigation/NavigationMobile/NavigationMobile';
import {NavigationDesktop} from './Navigation/NavigationDesktop/NavigationDesktop'
import { Category } from './CategoryMobile/Category';
import { BannerSection } from './BannerSection/BannerSection';
// import { FilterSection } from './FilterSection/FilterDesktop';
import { DescriptionSection } from './DescriptionSection/DescriptionDesktop';
import { SortSection } from './SortSection/SortSection';
import { ProductSection } from './ProductSection/ProductSection';
import { useMediaQuery } from 'react-responsive';
import './content.css';
import FilteringMenu from './FilterSection/FilteringMenu';
import { useState } from 'react';
export const Content = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    const [selectedDescription, setSelectedDescription] = useState('shoes');
    const [selectedCategory, setSelectedCategory] = useState('shoes');
    const [filteredState, setFilteredState] = useState('');
    const [sortedState, setSortedState] = useState('');

    const handleCategoryClick = (category, description) => {
      setSelectedDescription(description);
      setSelectedCategory(category);
    };
    const handleFilterClick = (selectedColor, selectedMinPrice, selectedMaxPrice) => {
        setFilteredState({
            color: selectedColor,
            minPrice: selectedMinPrice,
            maxPrice: selectedMaxPrice
        });
    };
        const handleSortClick = (sort) => {
        setSortedState(sort);
    }

    if (!isMobile) {
        return(
            <div>
                <NavigationDesktop onCategoryClick={handleCategoryClick}/>
                <BannerSection/>
                
                <div className='plp'>
                    <div className='filter_position'>
                        <FilteringMenu onFilterClick={handleFilterClick}/>
                    </div>
                    <div className='content_position'>
                        <div className='sorting_position'>
                            <DescriptionSection selectedDescription={selectedDescription}/>
                            <SortSection/>
                        </div>
                        <div className='product_position'>
                            <ProductSection selectedCategory={selectedCategory}  filteredState={filteredState}/>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
            );
    } else {
        return (
            <div>
                <NavigationMobile handleFilterClick={handleFilterClick} handleSortClick={handleSortClick}/>
                <Category onCategoryClick={handleCategoryClick}/>
                <ProductSection selectedCategory={selectedCategory} filteredState={filteredState} sortedState={sortedState}/>
            </div>
        )
    }
};
