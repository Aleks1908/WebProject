import { NavigationMobile } from './Navigation/NavigationMobile/NavigationMobile';
import {NavigationDesktop} from './Navigation/NavigationDesktop/NavigationDesktop'
import { Category } from './CategoryMobile/Category';
import { BannerSection } from './BannerSection/BannerSection';
import { DescriptionSection } from './DescriptionSection/DescriptionDesktop';
import { SortSection } from './SortSection/SortSection';
import { ProductSection } from './ProductSection/ProductSection';
import { useMediaQuery } from 'react-responsive';
import { FooterSection } from './FooterSection/FooterSection';
import FilteringMenu from './FilterSection/FilteringMenu';
import { useState } from 'react';
import './content.css';
export const Content = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    
    const [selectedCategory, setSelectedCategory] = useState('shoes');
    const [selectedDescription, setSelectedDescription] = useState(`The shoe category refers to a wide range of footwear products designed to be worn 
    on the feet for various purposes. Shoes are essential accessories that provide protection, support, and comfort during daily activities and special 
    occasions. They come in diverse styles, designs, and materials, catering to different needs and fashion preferences.`);
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
                            <DescriptionSection selectedDescription={selectedDescription} selectedCategory={selectedCategory}/>
                            <SortSection onSortClick={handleSortClick}/>
                        </div>
                        <div className='product_position'>
                            <ProductSection selectedCategory={selectedCategory}  filteredState={filteredState} sortedState={sortedState}/>
                        </div>
                        
                    </div>
                   
                </div>
                <FooterSection/>
            </div>
            );
    } else {
        return (
            <div>
                <NavigationMobile handleFilterClick={handleFilterClick} handleSortClick={handleSortClick}/>
                <BannerSection/>

                <Category onCategoryClick={handleCategoryClick}/>
                <DescriptionSection selectedDescription={selectedDescription} selectedCategory={selectedCategory}/>
                <ProductSection selectedCategory={selectedCategory} filteredState={filteredState} sortedState={sortedState}/>
                <FooterSection/>
            </div>
        )
    }
};
