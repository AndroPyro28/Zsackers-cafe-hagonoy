import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { Product as ProductInterface } from '../../model'
import {ProductContainer, Price, Image, Name, Details, Buttons} from './components'

interface Props {
  data: ProductInterface,
  setProductId: React.Dispatch<React.SetStateAction<number>>
}
function Product({data, setProductId}: Props) {
  return (
    <ProductContainer>
            <Price>{productPriceFormatter(data.price + '')}</Price>
            <Image src={data.image_url} />
            <Name>{data.productName}</Name>
            <Details>{data.details || '...'}</Details>
            <Buttons> <span className='view' onClick={() => setProductId(data.id)}> <i className="fa-solid fa-eye"></i></span> <span className='add__to__cart'>Add to cart </span></Buttons>
    </ProductContainer>
  )
}

export default Product