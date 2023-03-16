import React, { useEffect, useRef } from 'react'
import productPriceFormatter from '../../../../helpers/ProductPriceFormatter'
import { bundleVariants, Product } from '../../../../model'
import { VariantContainer } from './components'

interface Props {
    orderedProduct: Product
    addonData: Product,
    bundleVariants: bundleVariants
    setBundleVariants: React.Dispatch<React.SetStateAction<bundleVariants>>
}

function Addon({addonData, bundleVariants, setBundleVariants} : Props) {

  useEffect(() => {
    setBundleVariants(prev => [...prev, {
        quantity: 0,
        productId: addonData?.id,
        exclude: true
    }])
  }, [])

  const variant = bundleVariants.find((value) => value.productId == addonData?.id);
  const incrementAvailable = addonData.stock <= variant?.quantity!;

  const handleDecrement = () => {
    const bundles = bundleVariants;
    setBundleVariants([])
    bundles.map((bundle) => {
        if(bundle.productId == addonData?.id) {
            setBundleVariants(prev => 
                [...prev, {
                    quantity: bundle.quantity > 0 ? bundle.quantity - 1 : 0 , 
                    productId: bundle.productId,
                    exclude: true
                }
                ]
            )
        }
        else {
            setBundleVariants(prev => [...prev, bundle])
        }
    })
    
}

  const handleIncrement = () => {
    const bundles = bundleVariants;
    setBundleVariants([])
    bundles.forEach((bundle) => {
        if(bundle.productId == addonData?.id) {
            setBundleVariants(prev => 
                [...prev, {
                    quantity: 
                    bundle.quantity + 1, 
                    productId: bundle.productId,
                    exclude: true
                }
            ]
            )
        }
        else {
            setBundleVariants(prev => [...prev, bundle])
        }
    })
}

  return (
    <VariantContainer>
            <img src={addonData?.image_url} className='product__image' alt="" />
            <span className='product__name'>{addonData?.productName}</span>
            <span className='product__setcategory'>{ productPriceFormatter( addonData.price + '') }</span>
            <div className='buttons'> 
            <button className='decrement'  onClick={handleDecrement}>-</button>  
            <span className='quantity'>{variant?.quantity} </span> 
            <button className='increment' disabled={incrementAvailable} onClick={handleIncrement}>+</button> 
            </div>
        </VariantContainer>
  )
}

export default Addon