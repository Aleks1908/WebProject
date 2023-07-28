import { useState } from 'react';
import logo from './logo.png'
import './navigation.css' ;

export const Navigation = () => {
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
    <div>
      <div className='navigation'>  
        <button onClick={openFilter} >X</button>
        <div className='title'>
          <img src={logo} alt="" className='logo'/>
        </div>
        <button onClick={openSort}> X </button>
      </div>

      <div className={filterClass}>
        <li>
            Option 1
        </li>
        <li>
            Option 2
        </li>
      </div>
      <div className={sortClass}>
        <li>
          Option 3
        </li>
        <li>
          Option 4
        </li>
      </div>
    </div>
    );
};