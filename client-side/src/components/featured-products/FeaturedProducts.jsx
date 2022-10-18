import React from 'react'
import { FeaturedProductsContainer, Products, Productsidebar, ProductList} from "./components"
import Product from './Product'
function FeaturedProducts() {
  return (
    <FeaturedProductsContainer>
      <Productsidebar>
        <span>Milk tea</span>
        <span className='active'>Donuts</span>
        <span>Frappe</span>
        <span>Pizza</span>
      </Productsidebar>
      <Products>
        <h1>Our Products</h1>

      <ProductList>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

      </ProductList>
       
      </Products>
    </FeaturedProductsContainer>
  )
}

export default FeaturedProducts