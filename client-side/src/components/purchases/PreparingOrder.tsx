import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { CancelButton, Info, Order, Row, ViewButton } from './components'
import {useNavigate} from 'react-router-dom';
import { OrderDetails } from '../../model';

interface Props {
    data: OrderDetails
}
function PreparingOrder({data}: Props) {
    const navigate = useNavigate()
    console.log(data)
  return (
    <Order> 
    {
    //   toggleCancel && <CancelOrder setToggleCancel={setToggleCancel} setOrders={setOrders} id={data.id} />
    }
      <img src={data?.cart_product[0]?.product?.image_url} />
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
            {data?.cart_product?.length} items
          </h3>
        </Row>
        <Row>
          <small style={{textTransform:"capitalize"}}>
          <i className="fa-solid fa-credit-card"></i> &nbsp; {data?.paymentMethod} Payment
          </small>
        </Row>
        <Row>
        <ViewButton className=""
        //  onClick={() => navigate(`/customer/purchases/${data.reference}`)}
         >
            View Order
          </ViewButton>
          <CancelButton className="" 
        //   onClick={cancelOrder}
          >
            Cancel Order
          </CancelButton>
        </Row>
      </Info>
    </Order>
  )
}

export default PreparingOrder