import React from "react";
import FilterData from "../../../components/sales/FilterData";
import SalesData from "../../../components/sales/SalesData";
import {
  SaleContainerPage,
  GlobalStyles,
  FilterDataContainer,
  Title,
} from "./components";
import SaleOrders from "../../../components/sales/SalesOrders";
import productPriceFormatter from "../../../helpers/ProductPriceFormatter";
import { useState } from "react";
import { useEffect } from "react";
import { useGetCompletedCancelledOrdersQuery } from "../../../services";


function Sales() {
  const [filterDateFrom, setFilterDateFrom] = useState("");
  const [filterDateTo, setFilterDateTo] = useState("");
  const {data: Orders} = useGetCompletedCancelledOrdersQuery(
    {
      filterDateFrom,
      filterDateTo
    }
  )
  
  let total = Orders?.reduce((total, order) => total + order.totalAmount, 0);

  if(!total) total = 0;
  return (
    <SaleContainerPage>
      <GlobalStyles />
      <SalesData />

      <FilterDataContainer>
        <Title>
          Total sales: {productPriceFormatter(total+ '')}
        </Title>
        <FilterData dateSetter={{ setFilterDateFrom, setFilterDateTo }} />
      </FilterDataContainer>
      <SaleOrders orders={Orders!} />
    </SaleContainerPage>
  );
}

export default Sales;