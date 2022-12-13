import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { OrderDetails } from '../../model'
import { OrderCalculation } from '../../pages/admin/order_details/components'
import { OrderSummary } from '../../pages/admin/order_details/components'

function Summary({data}:{data:OrderDetails}) {

  const subtotal = data?.cart_product.reduce((total, cart) => total +(cart.quantity * cart.product.price) , 0)
  return (
    <OrderSummary>
      <OrderCalculation>
        <div>Subtotal:</div>
        <div>{productPriceFormatter(subtotal + '') }</div>
      </OrderCalculation>

      <OrderCalculation>
        <div>Shipping:</div>
        <div>{productPriceFormatter(subtotal * 0.1 + '')}</div>
      </OrderCalculation>

      <OrderCalculation>
        <div>Total:</div>
        <div>{productPriceFormatter(data?.totalAmount + '')}</div>
      </OrderCalculation>
    </OrderSummary>
  )
}

export default Summary