import React, { useEffect, useState } from 'react'
import { OrderDetails } from '../../model';
import { OrderStatus, OrderStatusContainer, OrderStatusInfo } from '../../pages/admin/order_details/components'
import Logic from './Logic';

function StatusOnlineOrder({data}: {data: OrderDetails} ) {

  const [deliveryStatus, setDeliveryStatus] = useState(0);
  const [statusSummaryPackaging, setStatusSummaryPackaging] = useState("");
  const [statusSummaryShipping, setStatusSummaryShipping] = useState("");
  const [statusSummaryDelivering, setStatusSummaryDelivering] = useState("");

  useEffect(() => {
    setDeliveryStatus(data?.delivery_status);
  }, [data]);

  
  useEffect(() => {
    setStatusSummaryPackaging(statusSummary(1));
    setStatusSummaryShipping(statusSummary(2));
    setStatusSummaryDelivering(statusSummary(3));
  }, [deliveryStatus]);

  console.log(statusSummaryPackaging,
    statusSummaryShipping,
    statusSummaryDelivering,)
  const { statusSummary,
    orderNextStage
  } = Logic({
    deliveryStatus,
    setDeliveryStatus,
  });

  return (
    <OrderStatusContainer>
      <h3>Order Status</h3>

      <OrderStatus className={statusSummaryPackaging}>
      <i className="fa-solid fa-boxes-stacked i"></i>
      <OrderStatusInfo status={statusSummaryPackaging}>
        <span>
          Order Packed{" "}
          <i className={`fa-solid fa-circle-check i ${statusSummaryPackaging}`}></i>
        </span>
        <small>Order is being prepared</small>
      </OrderStatusInfo>
    </OrderStatus>

      <OrderStatus className={statusSummaryShipping}>
      <i className="fa-solid fa-truck-fast i"></i>
      <OrderStatusInfo  status={statusSummaryShipping}>
        <span>
          Order Dispatched{" "}
          <i className={`fa-solid fa-circle-check i ${statusSummaryShipping}`}></i>
        </span>
        <small>Preparing to dispatch </small>
      </OrderStatusInfo>
    </OrderStatus>

      <OrderStatus className={statusSummaryDelivering}>
      <i className="fa-solid fa-truck-ramp-box  i"></i>
      <OrderStatusInfo  status={statusSummaryDelivering}>
        <span>
          Order Delivered{" "}
          <i
            className={`fa-solid fa-circle-check i ${statusSummaryDelivering}`}
          ></i>
        </span>
        <small>Order is in shipping process </small>
      </OrderStatusInfo>
    </OrderStatus>
      
      {data?.id ? (
        <>
          {data?.order_status !== "cancelled" && deliveryStatus !== -1 ? (
            <button
             onClick={() => orderNextStage(data?.id)} disabled={deliveryStatus >= 4}
             >
              {deliveryStatus >= 4 ? "Order completed" : "Next Stage"}
            </button>
          ) : (
            <button disabled={deliveryStatus === -1}>
              {"Order cancelled"}
            </button>
          )}
        </>
      ) : (
        <> </>
      )}
    </OrderStatusContainer>
  )
}

export default StatusOnlineOrder