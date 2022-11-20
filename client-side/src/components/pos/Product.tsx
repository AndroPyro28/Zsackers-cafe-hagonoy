import React from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { ProductContainer, Image, Name, Price } from './components'

function Product() {
  return (
    <ProductContainer>
        <Image src='/assets/donut.jpg'/>
        <Name>Donut Bundle 1</Name>
        <Price>{productPriceFormatter(150 + '')}</Price>
    </ProductContainer>
  )
}

export default Product