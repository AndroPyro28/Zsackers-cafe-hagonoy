import { useState } from 'react'
import {InventoryRightContentContainer, FilterItemsContainer, FilterContainer, ButtonContainer, TableRow, T_HEAD, ProductListContainer} from "../../pages/admin/inventory/components"
import CategoryModal from '../modals/admin/category/CategoryModal'
import ProductCreateModal from '../modals/admin/product/ProductCreateModal'
import InventoryTableRow from '../table/InventoryTableRow'
import Product from './Product'
import FilterItems from './FilterItems'
import { useGetAllProductQuery } from '../../services'


function InventoryRightContent({searchName}: {searchName: string}) {

  const [openCreateProductModal, setOpenCreateProductModal] = useState<boolean>(false)
  const [viewCategory, setViewCategory] = useState<boolean>(false)
  const [categoryId, setterCategoryId] = useState<number>(0)
  const [subcategoryId, setterSubCategoryId] = useState<number>(0)
  const [setcategoryId, setterSetCategoryId] = useState<number>(0)

  const {data} = useGetAllProductQuery({
    searchName,
    categoryId,
    subcategoryId,
    setcategoryId,
  });
  
  return (
    <InventoryRightContentContainer>
      {
        openCreateProductModal && <ProductCreateModal setOpenCreateProductModal={setOpenCreateProductModal} />
      }

      {
        viewCategory && <CategoryModal setViewCategory={setViewCategory}/>
      }
    
      <FilterItems 
      setOpenCreateProductModal={setOpenCreateProductModal}
      setViewCategory={setViewCategory}
      categoryId={categoryId}
      subcategoryId={subcategoryId}
      setcategoryId={setcategoryId}
      setterCategoryId={setterCategoryId}
      setterSubCategoryId={setterSubCategoryId}
      setterSetCategoryId={setterSetCategoryId}
  
      />

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