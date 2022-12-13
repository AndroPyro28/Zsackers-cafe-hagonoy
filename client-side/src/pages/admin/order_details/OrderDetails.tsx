import { useParams } from 'react-router-dom';
import Details from "../../../components/order_details/Details";
import Product from "../../../components/order_details/Product";
import Shipping from "../../../components/order_details/Shipping";
import Status from "../../../components/order_details/Status";
import Summary from "../../../components/order_details/Summary";
import { useGetOrderByOrderIdQuery } from '../../../services';
import {
  OrderNumber,
  OrderDetailsContainer,
  OrderedItemsContainer,
  OrderedProducts,
  OrderedItemsHeader,
  CustomerDetailsContainer,
  GlobalStyles,
} from "./components";

function OrderDetails() {

  const { order_id } = useParams()

  const { data: orderData } = useGetOrderByOrderIdQuery(order_id!)
  return (
    <>
      <GlobalStyles />

      <OrderNumber>
        <h3> Order <span># {order_id} </span> </h3>
        <small>Order Date: {new Date(orderData?.createdAt!).toLocaleDateString('en-US', { timeZone: "Asia/Manila", hour: 'numeric', minute: 'numeric', hour12: true })}</small>
      </OrderNumber>

      <OrderDetailsContainer>

        <OrderedItemsContainer>

          <OrderedItemsHeader>
            <h3> Ordered Items <small>(All items were shipped)</small> </h3>
          </OrderedItemsHeader>

          <OrderedProducts> {/* product List component */}
            {
              orderData?.cart_product?.map(cartProduct => {
                return <Product data={cartProduct} key={cartProduct.id} />
              })
            }
          </OrderedProducts>
          {/* summary component */}
          <Summary data={orderData!} />

        </OrderedItemsContainer>
        {/* status component */}
        <Status data={orderData!} />

      </OrderDetailsContainer>

      <CustomerDetailsContainer>

        <Details data={orderData!} />

            {
              orderData?.order_status === 'cancelled' && orderData.delivery_status === -1 &&  <Shipping data={orderData!}/>
            }
       
      </CustomerDetailsContainer>
    </>
  )
}

export default OrderDetails