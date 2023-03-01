import React from 'react';
import './Product.css'
function Product({title,image,price,rating}) {
  return (
    <div className='product'>
      <div className='product__info'>
<p>{title} </p>
<small>{price}</small>
<strong>ETB</strong>
<div className='product__rating'>
{Array (rating)
.fill((_, i)=>(
  <p>rev</p>
))}
</div>
<img 
className='product__img'
src={image}
alt="the productv images"
 />
<button className='product__button'>add to basket</button>
      </div>

    </div>
  )
}

export default Product
