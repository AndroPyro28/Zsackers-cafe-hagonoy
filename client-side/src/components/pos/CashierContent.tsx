import React, { useEffect, useState } from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { useGetAllProductQuery } from '../../services'
import { CashierContent as CashierContentContainer, Discount, DiscountAmount, Orders, OrderSummary, Subtotal, SubtotalAmount, Summary, Tax, TaxAmount, Total, TotalAmount } from './components'
import Order from './Order'

function CashierContent() {

  const [posItem, setPosItem] = useState<{ productId: number, quantity: number }[]>([]);

  useEffect(() => {
    try {
      setPosItem(JSON.parse(window.sessionStorage.getItem('posItem')!))
    } catch (error) {
      console.error('errrrorrr', error)
      setPosItem([])
    }
  }, [window.sessionStorage.getItem('posItem')])

  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <CashierContentContainer>
      <h1>Current Order</h1>
      <Orders>
        {
          posItem?.length > 0 && posItem?.map((item) => <Order data={{ productId: item.productId, quantity: item.quantity }} setTotalAmount={setTotalAmount} key={item.productId} />)
        }
      </Orders>

      <OrderSummary>
        <Summary>
          <Subtotal>Subtotal</Subtotal>
          <SubtotalAmount>{productPriceFormatter(totalAmount + '')}</SubtotalAmount>
        </Summary>
        <Summary>
          <Tax>Tax</Tax>
          <TaxAmount>{productPriceFormatter(totalAmount + '')}</TaxAmount>
        </Summary>
        <Summary>
          <Discount>Discount</Discount>
          <DiscountAmount>{productPriceFormatter(totalAmount + '')}</DiscountAmount>
        </Summary>
        <Summary>
          <Total>Discount</Total>
          <TotalAmount>{productPriceFormatter(totalAmount + '')}</TotalAmount>
        </Summary>
      </OrderSummary>
    </CashierContentContainer>
  )
}

export default CashierContent