import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { Product as ProductInterface } from '../../model'
import { useAddToCartMutation, useGetCartProducts } from '../../services/cart-products';
import { ProductContainer, Image, Name, Price } from './components'

interface Props {
  data: ProductInterface
}
function Product({ data }: Props) {

  const [addToCartMutation] = useAddToCartMutation();
  const {data: cartProducts} = useGetCartProducts()
  
  const handleClick = async () => {
    const cartProduct = cartProducts?.find((cartProduct) => cartProduct.product.id == data.id);
    try {
        if(cartProduct && cartProduct?.quantity < data.stock || !cartProduct) {
            const result = await addToCartMutation(data.id);
        } else {
            toast('You reached the maximum stock of this product', {type: 'info'})
        }
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