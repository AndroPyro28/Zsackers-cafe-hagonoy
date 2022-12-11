import { useEffect, useState } from "react";
import Order from "../../../components/orders/Order";
import { useGetOrdersByAdminQuery } from "../../../services";
import {
  OrderDetailsContainer,
  OrderDetailsList,
  SearchBarWrapper,
  SearchBarContainer,
  TableContainer,
  TableRowHeader,
  T_Head as Thead,
  GlobalStyles,
} from "./components";

type orderStatus = 'pending' | 'onGoing' | 'completed' | 'cancelled' | 'all'


function Orders() {
  const [search, setSearch] = useState('')

  const [orderStatus, setOrderStatus] = useState<orderStatus>('all');

  const { data: orders, refetch, isLoading } = useGetOrdersByAdminQuery({
    search,
    order_status: orderStatus
  });

  useEffect(() => {
    refetch()
  }, [search,
    orderStatus])

  console.log(orders);

  let orderContent;

  if (isLoading) {
    orderContent = <h3>loading...</h3>
  }
  else {
    orderContent = orders?.length === 0 ? <h3>No orders found</h3> : orders?.map((order) => <Order data={order} key={order.id} />)
  }

  return (
    <OrderDetailsContainer>
      <GlobalStyles />
      <h3>To Ship Orders</h3>

      <p>
        Welcome, Admin! Tracking customer order allows you to manage, modified
        and approve all the pending orders in the system.
      </p>

      <OrderDetailsList>
        <SearchBarWrapper>
          <SearchBarContainer>
            <i className="fa-solid fa-magnifying-glass i"></i>
            <input
              type="text"
              placeholder="Search for Order ID"
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchBarContainer>

          <select
            className="select"
            onChange={(e) => setOrderStatus(e.target.value as orderStatus)}
          >
            <option value="all">All Orders</option>
            <option value="pending">Pending</option>
            <option value="onGoing">On Going</option>
          </select>
        </SearchBarWrapper>

        <TableContainer>
          <TableRowHeader>
            <Thead className="id"> Order ID </Thead>
            <Thead className="customer"> Customer </Thead>
            <Thead className="date"> Date </Thead>
            <Thead className="price"> Price </Thead>
            <Thead className="order__status"> Order Status </Thead>
            <Thead className="payment__method"> Payment Method</Thead>
          </TableRowHeader>

          {orderContent}

        </TableContainer>
      </OrderDetailsList>
    </OrderDetailsContainer>
  )
}

export default Orders