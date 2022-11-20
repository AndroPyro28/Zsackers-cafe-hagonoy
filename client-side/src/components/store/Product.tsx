import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { Product as ProductInterface } from '../../model'
import {ProductContainer, Price, Image, Name, Details, Buttons} from './components'

interface Props {
  data: ProductInterface
}
function Product({data}: Props) {
  return (
    <ProductContainer>
            <Price>{productPriceFormatter(data.price + '')}</Price>
            <Image src={data.image_url} />
            <Name>{data.productName}</Name>
            <Details>{data.details || '...'}</Details>
            <Buttons> <span className='view'> <i className="fa-solid fa-eye"></i></span> <span className='add__to__cart'>Add to cart </span></Buttons>
    </ProductContainer>
  )
}

export default Product