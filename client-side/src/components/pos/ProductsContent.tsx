import React, { useState } from 'react'
import { useGetAllProductQuery } from '../../services';
import { Products, ProductsContent as ProductsContentContainer } from './components'
import FilterItems from './FilterItems'
import Product from './Product'
function ProductsContent() {

  const [categoryId, setterCategoryId] = useState(0);
  const [setcategoryId, setterSetCategoryId] = useState(0);
  const [subcategoryId, setterSubCategoryId] = useState(0);
  const [searchName, setSearchName] = useState('');

  const { data: products } = useGetAllProductQuery({
    categoryId,
    setcategoryId,
    subcategoryId,
    searchName,
  })
  return (
    <ProductsContentContainer>

      <FilterItems
        categoryId={categoryId}
        setcategoryId={setcategoryId}
        subcategoryId={subcategoryId}
        searchName={searchName}
        setterCategoryId={setterCategoryId}
        setterSetCategoryId={setterSetCategoryId}
        setterSubCategoryId={setterSubCategoryId}
        setSearchName={setSearchName}
      />

      <Products>
        {
          products?.map((product) => <Product data={product} /> )
        }
      </Products>

    </ProductsContentContainer>
  )
}

export default ProductsContent