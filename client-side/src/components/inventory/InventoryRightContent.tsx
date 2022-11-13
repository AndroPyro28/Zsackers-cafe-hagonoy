import { useEffect, useState } from 'react'
import {InventoryRightContentContainer, FilterItemsContainer, FilterContainer, ButtonContainer, TableRow, T_HEAD, ProductListContainer} from "../../pages/admin/inventory/components"
import CategoryModal from '../modals/admin/category/CategoryModal'
import ProductCreateModal from '../modals/admin/product/ProductCreateModal'
import InventoryTableRow from '../table/InventoryTableRow'
import Product from './Product'
import FilterItems from './FilterItems'
import { useGetAllCategoryQuery, useGetAllProductQuery } from '../../services'

function InventoryRightContent({searchName, setSearchName}: {searchName: string, setSearchName: React.Dispatch<React.SetStateAction<string>>}) {

  const [openCreateProductModal, setOpenCreateProductModal] = useState<boolean>(false)
  const [viewCategory, setViewCategory] = useState<boolean>(false)
  const [categoryId, setterCategoryId] = useState<number>(0)
  const [subcategoryId, setterSubCategoryId] = useState<number>(0)
  const [setcategoryId, setterSetCategoryId] = useState<number>(0)

  const { data: categories, refetch: refetchCategory } = useGetAllCategoryQuery('', {
    refetchOnFocus: true,
    refetchOnReconnect: true
  })

  const {data: products, isLoading, error, refetch:refetechProduct} = useGetAllProductQuery({
    searchName,
    categoryId,
    subcategoryId,
    setcategoryId,
  }, {
    refetchOnFocus: true,
    refetchOnReconnect: true
  });

  useEffect(() => {
    // to reset all the filter
    setterSubCategoryId(0)
    setterSetCategoryId(0)
    setSearchName('')
    }, [categoryId])

    useEffect(() => {
      refetchCategory()
      refetechProduct()
    }, [])

  if(isLoading) return <></>

  const fetchProducts = products?.map((product) => (
    <Product key={product.id} data={product} categories={categories!}/>
  ))

  return (
    <InventoryRightContentContainer>
      {
        openCreateProductModal && <ProductCreateModal setOpenCreateProductModal={setOpenCreateProductModal} />
      }

      {
        viewCategory && <CategoryModal setViewCategory={setViewCategory}/>
      }
    
    {
      categories && <FilterItems 
      setOpenCreateProductModal={setOpenCreateProductModal}
      setViewCategory={setViewCategory}
      categoryId={categoryId}
      subcategoryId={subcategoryId}
      setcategoryId={setcategoryId}
      setterCategoryId={setterCategoryId}
      setterSubCategoryId={setterSubCategoryId}
      setterSetCategoryId={setterSetCategoryId}
      categories={categories}
      />
    }
      <InventoryTableRow />
      
      <ProductListContainer>
        { fetchProducts }
      </ProductListContainer>
      
    </InventoryRightContentContainer>
  )
}

export default InventoryRightContent