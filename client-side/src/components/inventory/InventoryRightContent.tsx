import React, { useState } from 'react'

import {InventoryRightContentContainer, FilterItemsContainer, FilterContainer, ButtonContainer, TableRow, T_HEAD, ProductListContainer} from "../../pages/admin/inventory/components"
import CategoryModal from '../modals/admin/category/CategoryModal'
import ProductCreateModal from '../modals/admin/product/ProductCreateModal'
import InventoryTableRow from '../table/InventoryTableRow'
import Product from './Product'
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
    
       

      <FilterItemsContainer>
        <FilterContainer>
        <span>Select</span>
          <select>
            <option value="">Category</option>
           
          </select>
        </FilterContainer>

        <FilterContainer>
          <span>Select</span>
          <select>
            <option value="">Sub-Category</option>
          </select>
        </FilterContainer>

        <FilterContainer>
          <span>Select</span>
          <select>
            <option value="">Set-Category</option>
          </select>
        </FilterContainer>

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

        <div className="pagination">
        <i className="fa-solid fa-chevron-left left" onClick={() => alert("")}></i>
          <span>{`${1} / ${1}`} </span>
        <i className="fa-solid fa-chevron-right right"></i>
        </div>
      </FilterItemsContainer>

      <InventoryTableRow />
      
      {/* products here */}

      <ProductListContainer>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductListContainer>
      
    </InventoryRightContentContainer>
  )
}

export default InventoryRightContent