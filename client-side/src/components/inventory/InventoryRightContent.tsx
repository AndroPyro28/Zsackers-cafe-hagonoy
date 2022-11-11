import React, { useState } from 'react'

import {InventoryRightContentContainer, FilterItemsContainer, FilterContainer, ButtonContainer, TableRow, T_HEAD, ProductListContainer} from "../../pages/admin/inventory/components"
import CategoryModal from '../modals/admin/category/CategoryModal'
import ProductCreateModal from '../modals/admin/product/ProductCreateModal'
import InventoryTableRow from '../table/InventoryTableRow'
function InventoryRightContent() {

  const [openCreateProductModal, setOpenCreateProductModal] = useState<boolean>(false)
  const [viewCategory, setViewCategory] = useState<boolean>(false)

  return (
    <InventoryRightContentContainer>

      {
        openCreateProductModal && <ProductCreateModal setOpenCreateProductModal={setOpenCreateProductModal} />
      }

      {
        viewCategory && <CategoryModal setViewCategory={setViewCategory}/>
      }
      
    
        <ButtonContainer>
          <div>
            <button onClick={() => setViewCategory(true)}>
              View category
            </button>
          </div>
          <button onClick={() => setOpenCreateProductModal(true)}>
            Add products <i className="fa-solid fa-plus plus"></i>
          </button>
        </ButtonContainer>

      <FilterItemsContainer>
        <FilterContainer>
          <span>Category 1</span>
          <select>
            <option value="">Select Category</option>
           
          </select>
        </FilterContainer>

        <FilterContainer>
          <span>Category 2</span>
          <select>
            <option value="">Select Sub-Category</option>
          </select>
        </FilterContainer>

        <div className="pagination">
        <i className="fa-solid fa-chevron-left left" onClick={() => alert("")}></i>
          <span>{`${1} / ${1}`} </span>
        <i className="fa-solid fa-chevron-right right"></i>
        </div>
      </FilterItemsContainer>

      <InventoryTableRow />
      
      {/* products here */}
      <ProductListContainer>
        {/* {loading ? <h2 style={{marginBlock:50, color:"gray"}}>Loading products...</h2> : products?.length > 0 ? (
          fetchProducts
        ) : (
          <Sign_Products />
        )} */}
      </ProductListContainer>
      
    </InventoryRightContentContainer>
  )
}

export default InventoryRightContent