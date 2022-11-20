import React from 'react'
import {Products, ProductsContent as ProductsContentContainer} from './components'
import FilterItems from './FilterItems'
import Product from './Product'
function ProductsContent() {
  return (
    <ProductsContentContainer>

          <FilterItems />

          <Products>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Products>

        </ProductsContentContainer>
  )
}

export default ProductsContent