import React from 'react'
import { ProductContainer, ProductName, ProductPrice } from './components'

function Product() {
  return (
    <ProductContainer>
        <img src="/assets/DOZEN.jpg" />

        <ProductName>One Dozen (Half filled, Half rings)</ProductName>
        <ProductPrice>Php 450.00</ProductPrice>
    </ProductContainer>
  )
}

export default Product