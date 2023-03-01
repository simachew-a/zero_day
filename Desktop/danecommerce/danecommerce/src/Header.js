import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className="header">
    <img className='header__logo'
     src='https://res.cloudinary.com/ddyvv0new/image/upload/v1665349250/e1-red-black-min_xqqxiy.gif' alt='logo'/>
<div className='header__search'>
<input className='header__searchInput' 
 type='text'/>
 <SearchIcon className='header__searchIcon'></SearchIcon>
</div>
<div className='header__nav'>
<div className='header__option'>
<span className='header__optionlineone'>hello</span>
<span className='header__optionone'>signin</span>
</div>
<div className='header__option'> 
<span className='header__optionlinetwo'>message</span>
</div>
<div className='header__option'>
<span className='header__optionlinethree'>notfication</span>
    
</div>
<div className='header__option'>
<span className='header__optionBasket'>
      
</span>
    <ShoppingBasketIcon />
    <span className='header__optionLineTwo header__basketCount'>0</span>
</div>


</div>
    </div>
  );

}



export default Header
