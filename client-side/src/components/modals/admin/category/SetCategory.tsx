import React from 'react'
import DateTimeFormatter from '../../../../helpers/DateTimeFormatter'
import { SetCategory as SetCategoryInterface } from '../../../../model/SetCategory'
import { SetCategoryContainer } from './components'
interface Props {
  data: SetCategoryInterface
}
function SetCategory({data}: Props) {
  const { dateAndTimeParser } = DateTimeFormatter()
  const { date, time } = dateAndTimeParser(data.createdAt)
  return (
    <SetCategoryContainer>
        <td>{data.name} </td>
          <td>{date} at {time}</td>
          <td>
            <span>
            <i className="fa-solid fa-file-pen"></i>
            </span>
            <span>
            <i className="fa-solid fa-eraser"></i>
            </span>
          </td>
    </SetCategoryContainer>
  )
}

export default SetCategory
