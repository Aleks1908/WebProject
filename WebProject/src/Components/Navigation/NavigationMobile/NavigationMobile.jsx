import { useState } from 'react';
import logo from './logo.png'
import './navigation_mobile.css' ;
import { AiOutlineFilter } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import FilteringMenu from './FilteringMenu';
import { SortingMenu } from './SortingMenu';


export const NavigationMobile = () => {
  const [filterClass, setFilterClass] = useState('filter-not-visible')
  const [sortClass, setSortClass] = useState('sort-not-visible')

  const openFilter = () => {
    if(filterClass === 'filter-visible'){
      setFilterClass('filter-not-visible');
      setSortClass('sort-not-visible');
    } else{
      setFilterClass('filter-visible');
      setSortClass('sort-not-visible');
    }
  }  
  const openSort = () => {
    if(sortClass === 'sort-visible'){
      setFilterClass('filter-not-visible');
      setSortClass('sort-not-visible');
    } else{
      setFilterClass('filter-not-visible');
      setSortClass('sort-visible');
    }
  }

  
  return(
    <div className='navigation'>
      <div className='navigation-buttons'>  
        <div onClick={openFilter} className='filterIcon'><AiOutlineFilter/></div>
        <div className='title'>
          <img src={logo} alt="" className='logo'/>
        </div>
        <div onClick={openSort} className='sortIcon'><FiMenu/></div>
      </div>

      <div className={filterClass}>
        <FilteringMenu/>
          
      </div>
      <div className={sortClass}>
        <SortingMenu/>
      </div>
    </div>
    );
};