import React from 'react'
import DateTimeFormatter from '../../../../helpers/DateTimeFormatter'
import productPriceFormatter from '../../../../helpers/ProductPriceFormatter'
import { Subcategory } from '../../../../model'
import { SubCategoryContainer } from './components'

interface Props {
  data: Subcategory
}
function SubCategory({data}: Props ) {
  const {dateAndTimeParser} = DateTimeFormatter()
    const {date, time} = dateAndTimeParser(data.createdAt)
    
  return (
    <SubCategoryContainer>
          <td>{data.name} </td>
          {/* <td>{productPriceFormatter(data.price)}</td> */}
          <td>{date} at {time}</td>
          <td>
            <span>
            <i className="fa-solid fa-file-pen"></i>
            </span>
            <span>
            <i className="fa-solid fa-eraser"></i>
            </span>
          </td>
        </SubCategoryContainer>
  )
}

export default SubCategory