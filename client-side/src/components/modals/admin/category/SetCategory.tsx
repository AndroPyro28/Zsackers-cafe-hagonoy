import { ErrorMessage, Field, Formik } from 'formik'
import React, { useState } from 'react'
import DateTimeFormatter from '../../../../helpers/DateTimeFormatter'
import { SetCategory as SetCategoryInterface } from '../../../../model/SetCategory'
import { FieldInputContainer } from '../components'
import { SetCategoryContainer } from './components'
import SetCategoryLogic from './SetCategoryLogic'
interface Props {
  data: SetCategoryInterface
}
function SetCategory({ data }: Props) {
  const { dateAndTimeParser } = DateTimeFormatter()
  const { date, time } = dateAndTimeParser(data.createdAt)
  const [allowUpdate, setAllowUpdate] = useState(false);

  const { updateSetCategory, validationSchema } = SetCategoryLogic({ setAllowUpdate })
  const initialValueUpdateSetCategory = {
    id: data.id,
    setcategory: data.name
  }
  return (
    <Formik
      initialValues={initialValueUpdateSetCategory}
      validationSchema={validationSchema}
      onSubmit={updateSetCategory}
    >
      <SetCategoryContainer>
        {
          allowUpdate ? <FieldInputContainer>
            <Field type="text" name="setcategory" placeholder="setcategory name" />
            <ErrorMessage name="setcategory" component={'div'} className="error__message" />
          </FieldInputContainer> : <td>{data.name} </td>
        }
        {
          !allowUpdate && <td>{date} at {time}</td>
        }
        <td>
          {
            !allowUpdate ? <span onClick={() => setAllowUpdate(true)}><i className="fa-solid fa-file-pen"></i></span> : <button type='submit'>
              <i className="fa-solid fa-file-pen"></i>
            </button>
          }
          <span>
            <i className="fa-solid fa-eraser"></i>
          </span>
        </td>
      </SetCategoryContainer>
    </Formik>

  )
}

export default SetCategory
