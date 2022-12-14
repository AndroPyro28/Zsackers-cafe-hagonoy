import productPriceFormatter from '../../../../helpers/ProductPriceFormatter'
import { useGetProductByIdQuery } from '../../../../services'
import { ModalBackdrop } from '../../components'
import {
    ProductDetailsContainer,
    ProductDetail,
    ImageContainer,
    Details,
    Name,
    Description,
    Others,
    Title,
    Price,
    AddToCartBtn,
    ProductFlavors,
    Flavors,
    BundleSize
} from './components'
import Product from './variant'
import Variants from './Variants'

function ProductDetails({ productId }: { productId: number }) {

    const { data: product, isLoading, isError } = useGetProductByIdQuery(productId);
    if(isLoading) return <></>

    if(isError)  return <></>

    return (
        <ModalBackdrop>
            <ProductDetailsContainer>
                <ProductDetail>
                    <ImageContainer>
                        <img src={product?.image_url} alt="" />
                    </ImageContainer>
                    <Details>
                        <Name>{product?.productName}</Name>
                        <BundleSize>{product?.quantity} pcs</BundleSize>
                        <Description>{product?.details}</Description>
                        <Others>
                            <Price> {productPriceFormatter(product?.price + '')}</Price>
                            <AddToCartBtn>Add to cart</AddToCartBtn>
                        </Others>
                    </Details>
                </ProductDetail>
                <Variants variants={product!.products}/>
            </ProductDetailsContainer>
        </ModalBackdrop>
    )
}

export default ProductDetails