import React from 'react'
import { Product } from '../../../../model'
import { VariantContainer } from './components'

function Variant({data}: {data: Product}) {
    return (
        <VariantContainer>
            <img src="/assets/donut.jpg" className='product__image' alt="" />
            <span className='product__name'>Donut</span>
            <span className='product__setcategory'>Strawberry</span>
            <div className='buttons'> 
            <button className='decrement'>-</button> 
            <span className='quantity'>0 </span>
            <button className='increment'>+</button> </div>
            {/* <p className='product__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at. Vero possimus pariatur vel nobis impedit quo praesentium accusantium unde saepe assumenda omnis quos cumque voluptatum, ad aperiam fugiat ex</p> */}
        </VariantContainer>
    )
}

export default Variant