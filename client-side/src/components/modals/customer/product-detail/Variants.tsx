import { faHourglass1 } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useGetAllProductQuery } from '../../../../services'
import Product from '../../../featured-products/Product'
import { ProductFlavors, Title, Flavors } from './components'
import Variant from './variant'

interface Props {
    categoryId: number
    setcategoryId: number
    subcategoryId: number
}

function Variants({
    subcategoryId
}: Props) {

    const { data: variants, isLoading } = useGetAllProductQuery({
        categoryId: 0,
        setcategoryId: 0,
        subcategoryId,
        searchName: ''
    })

    let content;

    if(isLoading) content = <h1>loading</h1>

    else content = <ProductFlavors>
    <Title>Other variants</Title>
    <Flavors>
        {
            variants!.length > 0 && variants?.map((variant) => <Variant data={variant} />)
        }
    </Flavors>
</ProductFlavors>
    return content
}

export default Variants