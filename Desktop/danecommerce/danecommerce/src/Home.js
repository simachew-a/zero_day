import React from 'react'
import './Home.css';
import Header from './Header';
import Product from './Product';


function Home() {
  return (
    <div>
    <Header />
    <div className='home'>
    <div className='home__container'>
 <img 
className='home__image' 
src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrDwqmIY0ivJJwqk-q9N7gY7e89g3oBIw1A&usqp=CAU'
alt='home'

/>
<div className='home__row'>
<Product title="profjffnnf"
 price={20}
  image="https://www.ethyp.com/img/et/c/1608214350-42-temam-web-technology.jpg"
  alt="nxedn"
  rating={5}
 />
 <Product />
</div>
<div className='home__row'>
<Product />
<Product />
<Product />
  </div>
  <div className='home__row'>
  <Product />
  <Product />
</div>
 </div> 
 </div>
 </div>
  )
}

export default Home
