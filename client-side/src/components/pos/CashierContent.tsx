import React from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import {CashierContent as CashierContentContainer, Discount, DiscountAmount, Orders, OrderSummary, Subtotal, SubtotalAmount, Summary, Tax, TaxAmount, Total, TotalAmount} from './components'
import Order from './Order'
function CashierContent() {
  return (
        <CashierContentContainer>
            <h1>Current Order</h1>

            <Orders>
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
            </Orders>

            <OrderSummary>
                <Summary>
                  <Subtotal>Subtotal</Subtotal>
                  <SubtotalAmount>{productPriceFormatter(250 + '')}</SubtotalAmount>
                </Summary>
                <Summary>
                  <Tax>Tax</Tax>
                  <TaxAmount>{productPriceFormatter(250 + '')}</TaxAmount>
                </Summary>
                <Summary>
                  <Discount>Discount</Discount>
                  <DiscountAmount>{productPriceFormatter(250 + '')}</DiscountAmount>
                </Summary>
                <Summary>
                  <Total>Discount</Total>
                  <TotalAmount>{productPriceFormatter(250 + '')}</TotalAmount>
                </Summary>
            </OrderSummary>
        </CashierContentContainer>
  )
}

export default CashierContent