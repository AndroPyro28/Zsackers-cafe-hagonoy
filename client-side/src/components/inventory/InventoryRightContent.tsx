import { useState } from 'react'
import {InventoryRightContentContainer, FilterItemsContainer, FilterContainer, ButtonContainer, TableRow, T_HEAD, ProductListContainer} from "../../pages/admin/inventory/components"
import CategoryModal from '../modals/admin/category/CategoryModal'
import ProductCreateModal from '../modals/admin/product/ProductCreateModal'
import InventoryTableRow from '../table/InventoryTableRow'
import Product from './Product'
import { useGetAllCategoryQuery } from '../../services'
import Logic from './Logic'


function InventoryRightContent() {

  const [openCreateProductModal, setOpenCreateProductModal] = useState<boolean>(false)
  const [viewCategory, setViewCategory] = useState<boolean>(false)

  const {data: categories, isError, isLoading} = useGetAllCategoryQuery('')
  const [categoryId, setCategoryId] = useState<number>(0)
  const [subcategoryId, setSubCategoryId] = useState<number>(0)
  const [setcategoryId, setSetCategoryId] = useState<number>(0)
  const {handleChange} = Logic();

    if(isLoading) {
      return <></>
    }

  const category = () => {
    return categories?.find(value => value.id === categoryId)
  }

  const subcategory = () => {
    return category()?.sub_category?.find(value => value.id === subcategoryId)
  }

  const fetchCategories = categories?.map((category) => (
    <option value={category.id} key={category.id}>{category.name}</option>
  ))

  const fetchSubCategories = category()?.sub_category.map((subcategory) => (
    <option value={subcategory.id} key={subcategory.id}>{subcategory.name}</option>
  ))

  const fetchSetCategories = subcategory()?.set_category.map((setcategory) => (
    <option value={setcategory.id} key={setcategory.id}>{setcategory.name}</option>
  ))

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
          <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(setCategoryId, e.target.value)}>
            <option value="">Category</option>
            {fetchCategories}
          </select>
        </FilterContainer>

        <FilterContainer>
          <span>Select</span>
          <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(setSubCategoryId, e.target.value)}>
            <option value="">Sub-Category</option>
            {fetchSubCategories}
          </select>
        </FilterContainer>

        <FilterContainer>
          <span>Select</span>
          <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(setSetCategoryId, e.target.value)}>
            <option value="">Set-Category</option>
            {fetchSetCategories}
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