import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { OrderDetails } from '../../model'
import { Info, Order, ReceivedButton, Row, ViewButton } from './components'
import { useNavigate } from 'react-router-dom'
import { useOrderDetailsNextStageMutation } from '../../services'
interface Props {
    data: OrderDetails
}

function ToReceiveOrder({data}: Props) {

  const navigate = useNavigate()

  const [orderNextStageMutation] = useOrderDetailsNextStageMutation()

  const orderCompleted = async () => {
    try {
      const res = await orderNextStageMutation({
        id: data.id,
        deliveryStatus: data.delivery_status
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Order>
    <img src={data?.cart_product[0].product.image_url} />
    <Info>
      <Row>
        <h1>
          Order <span># {data?.order_id}</span>
        </h1>
      </Row>

      <Row>
        <h4>Total amount of {productPriceFormatter(data?.totalAmount + '')}</h4>
      </Row>

      <Row>
        <h3>
          <i className="fa-solid fa-basket-shopping"></i>&nbsp;{" "}
          {data?.cart_product.length} items
        </h3>
      </Row>

      <Row>
        <small>
          <i
            className="fa-solid fa-location-dot"
            style={{ color: "red" }}
          ></i>
          &nbsp; {data?.address} Philippines{" "}
        </small>
      </Row>
      <Row>
        <small>
          <i className="fa-solid fa-phone"></i>&nbsp; (+
          {data?.contact})
        </small>
      </Row>

      <Row>
        <small style={{ textTransform: "capitalize" }}>
          <i className="fa-solid fa-credit-card"></i> &nbsp;{" "}
          {data?.paymentMethod} Payment
        </small>
      </Row>

      <Row>
        <ViewButton
          className=""
        onClick={() => navigate(`/customer/purchase-details/${data.order_id}`)}
        >
          View Order
        </ViewButton>
        {data.delivery_status === 3 && (
          <ReceivedButton
           onClick={orderCompleted}
           >Order Received</ReceivedButton>
        )} 
      </Row>
    </Info>
  </Order>
  )
}

export default ToReceiveOrder