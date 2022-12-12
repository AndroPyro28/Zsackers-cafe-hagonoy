import { useEffect, useState } from 'react';
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { Product as ProductInterface } from '../../model'
import { useAddToCartMutation } from '../../services/cart-products';
import { ProductContainer, Image, Name, Price } from './components'

interface Props {
  data: ProductInterface
}
function Product({ data }: Props) {

  const [addToCartMutation] = useAddToCartMutation();

  const handleClick = async () => {
    try {
      const result = await addToCartMutation(data.id);
      console.log(result)
    } catch (error) {
      console.error(error)
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