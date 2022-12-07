import React from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { useGetProductByIdQuery } from '../../services'
import { OrderContainer } from './components'
interface Props {
  data: {
    quantity: number,
    productId: number
  },
  setTotalAmount:  React.Dispatch<React.SetStateAction<number>>
}
function Order({ data, setTotalAmount }: Props) {
  const { quantity, productId } = data;
  const { data: product, isLoading } = useGetProductByIdQuery(productId);
  // setTotalAmount(prev => prev + ((quantity * product!.price ?? 0)))

  if (isLoading) return <></>
  return (
    <OrderContainer>
      <td><img src={product?.image_url} alt="" className='image' /></td>
      <td><span className='name'>{product?.productName}</span></td>
      <td><button className='decrement'>-</button> <span className='quantity'>{quantity}</span> <button className='increment'>+</button></td>
      <td><span className='price'>{productPriceFormatter((quantity * product!.price ?? 0) + '')}</span></td>
    </OrderContainer>
  )
}

export default Order