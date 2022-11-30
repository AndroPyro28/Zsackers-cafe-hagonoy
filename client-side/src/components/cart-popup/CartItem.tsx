import React from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { Product } from '../../model'
import { ProductContainer, ProductName, ProductPrice, ProductQuantity } from './components'
import Logic from './Logic'

interface Props {
    data: {
        id: number,
        quantity: number,
        product: Product
    }
}
function CartItem({ data }: Props) {
    const { product, quantity, id } = data;
    const { updateCartQuantity } = Logic()

    return (
        <ProductContainer>
            <img src={product.image_url} />
            <ProductName>
                <div>{product.productName}</div>
                <br />
                <small>{product?.details}</small>
            </ProductName>
            <ProductQuantity>
                <button
                    className="decremeant"
                    onClick={() => updateCartQuantity(id, 'decrement')}
                >
                    -
                </button>
                {quantity}
                <button
                    className="incremeant"
                    onClick={() => updateCartQuantity(id, 'increment')}
                    disabled={quantity >= product.stock}
                >
                    +
                </button>
            </ProductQuantity>
            <ProductPrice>

                {productPriceFormatter((quantity * product.price) + '')}
            </ProductPrice>
        </ProductContainer>
    )
}

export default CartItem