import { useEffect, useState } from 'react'
import Banner from '../../../components/store/Banner';
import Filter from '../../../components/store/Filter'
import { useGetAllProductQuery } from '../../../services';
import { StoreContainer, StoreGlobalStyles, ProductList } from './components'
import Product from '../../../components/store/Product';
import ProductDetails from '../../../components/modals/customer/product-detail/ProductDetails';

function Store() {

  const [categoryId, setterCategoryId] = useState(0);
  const [setcategoryId, setterSetcategoryId] = useState(0);
  const [subcategoryId, setterSubcategoryId] = useState(0);
  const [searchName, setSearchName] = useState('')


  const { data: products, error, isLoading } = useGetAllProductQuery({
    categoryId,
    setcategoryId,
    subcategoryId,
    searchName,
  })

  const [productId, setProductId] = useState<number>(0)
  

  useEffect(() => {
    setterSetcategoryId(0)
    setterSubcategoryId(0)
    // setSearchName('')
  }, [categoryId])

  if (isLoading) return <></>

  const fetchProducts = products?.map(product => (
    <Product data={product} key={product.id} setProductId={setProductId} />
  ))

  return (
    <StoreContainer>
      <Banner />
      <StoreGlobalStyles />
      {
        productId > 0 &&  <ProductDetails productId={productId}/>
      }
      <Filter
        setterCategoryId={setterCategoryId}
        setSearchName={setSearchName}
        searchName={searchName}
        setterSetcategoryId={setterSetcategoryId}
        setterSubcategoryId={setterSubcategoryId}
        categoryId={categoryId}
        setcategoryId={setcategoryId}
        subcategoryId={subcategoryId}
      />

      <ProductList>
        {products!.length > 0 ? fetchProducts : 'No products yet'}
      </ProductList>

    </StoreContainer>
  )
}

export default Store