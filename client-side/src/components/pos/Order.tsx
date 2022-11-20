import React from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import {OrderContainer} from './components'
function Order() {
  return (
    <OrderContainer>
        <img src="/assets/donut.jpg" alt="" className='image' />
        <span className='name'>Donut 1</span>
        <button className='decrement'>-</button>
        <span className='quantity'>1</span>
        <button className='increment'>+</button>
        <span className='price'>{productPriceFormatter(150 + '')}</span>
    </OrderContainer>
  )
}

export default Order