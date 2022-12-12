import React, { useEffect, useState } from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { useGetAllProductQuery } from '../../services'
import { useGetCartProductsQuery } from '../../services/cart-products'
import { CashierContent as CashierContentContainer, Discount, DiscountAmount, Orders, OrderSummary, Subtotal, SubtotalAmount, Summary, Tax, TaxAmount, Total, TotalAmount } from './components'
import Order from './Order'

function CashierContent() {

  const { data: CartProducts, isLoading, isError } = useGetCartProductsQuery()
  let content;

  if(isLoading) content = <h3>Loading...</h3>

  if(isError) content = <h3>Something went wrong...</h3>

  if(CartProducts?.length === 0) content = <h3>No Orders yet</h3>
  else content = CartProducts?.map((cartProduct) => <Order data={cartProduct} />)


  return (
    <CashierContentContainer>
      <h1>Current Order</h1>
      <Orders>
        { content }
      </Orders>

      <OrderSummary>
        <Summary>
          <Subtotal>Subtotal</Subtotal>
          <SubtotalAmount>{productPriceFormatter(50 + '')}</SubtotalAmount>
        </Summary>
        <Summary>
          <Tax>Tax</Tax>
          <TaxAmount>{productPriceFormatter(50 + '')}</TaxAmount>
        </Summary>
        <Summary>
          <Discount>Discount</Discount>
          <DiscountAmount>{productPriceFormatter(50 + '')}</DiscountAmount>
        </Summary>
        <Summary>
          <Total>Discount</Total>
          <TotalAmount>{productPriceFormatter(50 + '')}</TotalAmount>
        </Summary>
      </OrderSummary>
    </CashierContentContainer>
  )
}

export default CashierContent