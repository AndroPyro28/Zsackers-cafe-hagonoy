import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { OrderDetails } from '../../model'
import { OrderCalculation } from '../../pages/admin/order_details/components'
import { OrderSummary } from '../../pages/admin/order_details/components'

function Summary({data}:{data:OrderDetails}) {
  return (
    <OrderSummary>
      <OrderCalculation>
        <div>Subtotal:</div>
        <div>{productPriceFormatter(Math.ceil(data?.totalAmount - (data?.totalAmount * 0.01)) + '') }</div>
      </OrderCalculation>

      <OrderCalculation>
        <div>Shipping:</div>
        <div>{productPriceFormatter(Math.round(data?.totalAmount  * 0.01) + '')}</div>
      </OrderCalculation>

      <OrderCalculation>
        <div>Total:</div>
        <div>{productPriceFormatter(data?.totalAmount + '')}</div>
      </OrderCalculation>
    </OrderSummary>
  )
}

export default Summary