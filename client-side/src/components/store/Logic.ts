import React from 'react'
import { useAddToCartMutation } from '../../services/cart-products';

function Logic() {
    const [addToCartMutation] = useAddToCartMutation();
    
    const addToCart = async (productId: number) => {
        try {
            const result = await addToCartMutation(productId);
        } catch (error) {
            console.error(error)
        }
    }
    return {
        addToCart
    }
}

export default Logic