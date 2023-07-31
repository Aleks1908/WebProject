import { NavigationMobile } from './Navigation/NavigationMobile/NavigationMobile';
import {NavigationDesktop} from './Navigation/NavigationDesktop/NavigationDesktop'
import { Category } from './CategoryMobile/Category';
import { FilterSection } from './FilterSection/FilterDesktop';
import { DescriptionSection } from './DescriptionSection/DescriptionDesktop';
import { SortSection } from './SortSection/SortSection';
import { ProductSection } from './ProductSection/ProductSection';
import { useMediaQuery } from 'react-responsive';
import './content.css';
import { useState } from 'react';
export const Content = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    const [selectedCategory, setSelectedCategory] = useState('shoes');

    const handleCategoryClick = (category, description) => {
      setSelectedCategory(description);
      console.log(category)
    };

    if (!isMobile) {
        return(
            <div>
                <NavigationDesktop onCategoryClick={handleCategoryClick}/>
                <div className='plp'>
                    <div className='filter_position'>
                        <FilterSection/>
                    </div>
                    <div className='content_position'>
                        <div className='sorting_position'>
                            <DescriptionSection selectedCategory={selectedCategory}/>
                            <SortSection/>
                        </div>
                        <div className='product_position'>
                            <ProductSection/>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
            );
    } else {
        return (
            <div>
                <NavigationMobile/>
                <Category/>
            </div>
        )
    }
};
