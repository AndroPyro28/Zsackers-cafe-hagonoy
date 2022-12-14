import React from 'react'
import { toast } from 'react-toastify';
import { Product } from '../../model';
import { useAddToCartMutation, useGetCartProducts } from '../../services/cart-products';

function Logic() {
    const [addToCartMutation] = useAddToCartMutation();
  const {data: cartProducts} = useGetCartProducts()
    
    const addToCart = async (product: Product) => {

        const cartProduct = cartProducts?.find((cartProduct) => cartProduct.product.id == product.id);
        
        try {
            if(cartProduct && cartProduct?.quantity < product.stock || !cartProduct) {
                const result = await addToCartMutation(product.id);
            } else {
                toast('You reached the maximum stock of this product in your cart', {type: 'info'})
            }
        } catch (error) {
            console.error(error)
        }
    }
    return {
        addToCart
    }
}

export default Logic