import React, { SetStateAction, useState } from 'react'
import { ButtonContainer, FilterContainer, FilterItemsContainer } from '../../pages/admin/inventory/components'
import { useGetAllCategoryQuery } from '../../services'
import Logic from './Logic'


interface Props {
  setOpenCreateProductModal: React.Dispatch<React.SetStateAction<boolean>>
  setViewCategory: React.Dispatch<React.SetStateAction<boolean>>
    categoryId: number;
  subcategoryId: number;
  setcategoryId: number;
  setterCategoryId:  React.Dispatch<React.SetStateAction<number>>
setterSubCategoryId:  React.Dispatch<React.SetStateAction<number>>
setterSetCategoryId:  React.Dispatch<React.SetStateAction<number>>
}
function FilterItems({ 
  setOpenCreateProductModal,
  setViewCategory,
  categoryId,
  subcategoryId,
  setcategoryId, 
  setterCategoryId,
  setterSubCategoryId,
  setterSetCategoryId
 }: Props) {
  const { handleChange } = Logic();
  const { data: categories, isError, isLoading } = useGetAllCategoryQuery('')


  if (isLoading) {
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
    <FilterItemsContainer>
      <FilterContainer>
        <span>Select</span>
        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(setterCategoryId, e.target.value)}>
          <option value="">Category</option>
          {fetchCategories}
        </select>
      </FilterContainer>

      <FilterContainer>
        <span>Select</span>
        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(setterSubCategoryId, e.target.value)}>
          <option value="">Sub-Category</option>
          {fetchSubCategories}
        </select>
      </FilterContainer>

      <FilterContainer>
        <span>Select</span>
        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(setterSetCategoryId, e.target.value)}>
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
  )
}

export default FilterItems