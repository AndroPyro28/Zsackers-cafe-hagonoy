import { useEffect, useState } from 'react';
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { Product as ProductInterface } from '../../model'
import { ProductContainer, Image, Name, Price } from './components'

interface Props {
  data: ProductInterface
}
function Product({ data }: Props) {

  const handleClick = () => {
    let storage: { productId: number, quantity: number }[];
    const sessionStorage = window.sessionStorage.getItem('posItem');

    storage = !Boolean(sessionStorage) || !sessionStorage || sessionStorage == null ? 
    [] : 
    JSON.parse(sessionStorage)
    try {
      const index = storage.findIndex((posItem) => posItem.productId == data.id);
      console.log(!index, index)
      if (index == -1) {
        storage.push({ productId: data.id, quantity: 1 })
        window.sessionStorage.setItem('posItem', JSON.stringify(storage))
      } else {
        storage[index].quantity += 1;
        window.sessionStorage.setItem('posItem', JSON.stringify(storage))
      }
    } catch (error) {
      console.error(error)
    } finally {
      console.log(storage);
    }

  }

  return (
    <ProductContainer onClick={handleClick}>
      <Image src={data.image_url} />
      <Name>{data?.productName}</Name>
      <Price>{productPriceFormatter(data.price + '')}</Price>
    </ProductContainer>
  )
}

export default Product