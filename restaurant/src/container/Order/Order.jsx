import React from 'react';
import { images } from '../../constants';
import './Order.css';

const Order = () => (
  <div className='app__order'>
    <h1 className="app__order-headtext">Order from us online</h1>
    <div className='app__order__images'>
    <a href="https://www.swiggy.com/" target="_blank" rel="noopener noreferrer"><img className="app__ordr__swiggy-image" src={images.swiggy} alt="swiggy_logo" /></a>
    <a href="https://www.zomato.com/"target="_blank" rel="noopener noreferrer"><img className="app__ordr__zomato-image" src={images.zomato} alt="zomato_logo" /></a>
    </div>
  </div>
);

export default Order;
