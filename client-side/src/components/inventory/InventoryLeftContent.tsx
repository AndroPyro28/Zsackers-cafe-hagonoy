import React from 'react'
import {InventoryLeftContentContainer, SearchItemContainer,
    ProductStatisticContainer,
    ProductStatistic} from "../../pages/admin/inventory/components"
function InventoryLeftContent({setSearchName}: {setSearchName: React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <InventoryLeftContentContainer>
      <h1>Search for items</h1>

      <small>Name of an item</small>

      <SearchItemContainer>
        <input
          type="text"
          placeholder="Search by name..."
          onChange={(e: React.ChangeEvent< HTMLInputElement >) => setSearchName(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </SearchItemContainer>

      <ProductStatisticContainer>
        <div className="product__info">
          <div className="product__label">
            <div className='center'>
              <label htmlFor=""> {`Total sales for ${new Date().getFullYear()}`} </label>
              <h3>{5}</h3>
            </div>
          </div>

          <div className="product__label">
            <div className='center'>
              <label htmlFor=""> Total transactions </label>
              <h3>{5}</h3>
            </div>
          </div>
        </div>

        <ProductStatistic>
          {/* {data && <Line data={data} options={salesChartOption} />} */}
        </ProductStatistic>
      </ProductStatisticContainer>
    </InventoryLeftContentContainer>
  )
}

export default InventoryLeftContent