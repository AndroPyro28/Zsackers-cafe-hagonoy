import React from 'react'
import { useUpdateQuantityMutation } from '../../services/cart-products'

function Logic() {

    const [updateQuantityMutation] = useUpdateQuantityMutation()
    const updateCartQuantity = async (id: number, action: string) => {
        try {
            const result = await updateQuantityMutation({id, action})
        } catch (error) {
            console.error(error)
        }
    }
  return {
    updateCartQuantity
  }
}

export default Logic