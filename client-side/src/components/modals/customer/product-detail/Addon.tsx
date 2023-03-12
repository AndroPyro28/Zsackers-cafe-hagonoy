import React from 'react'
import { Product } from '../../../../model'
import { VariantContainer } from './components'

interface Props {
    orderedProduct: Product
    data: Product
}
function Addon({data} : Props) {
  return (
    <VariantContainer>
            <img src={data?.image_url} className='product__image' alt="" />
            <span className='product__name'>{data?.productName}</span>
            <span className='product__setcategory'>{data?.sub_category?.name}</span>
            <div className='buttons'> 
            {/* <button className='decrement'  onClick={handleDecrement}>-</button>  */}
            {/* <span className='quantity'>{variant?.quantity} </span> */}
            {/* <button className='increment' disabled={incrementAvailable} onClick={handleIncrement}>+</button>  */}
            </div>
        </VariantContainer>
  )
}

export default Addon