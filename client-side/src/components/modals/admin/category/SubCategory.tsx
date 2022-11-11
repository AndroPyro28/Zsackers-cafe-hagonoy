import { ErrorMessage, Field, Formik } from 'formik'
import { useState } from 'react'
import DateTimeFormatter from '../../../../helpers/DateTimeFormatter'
import { Subcategory } from '../../../../model'
import { CategoryInputField, CreateSubCategoryContainer, SetCategoryListContainer, LeftForm, SubCategoryContainer, SubCategoryData } from './components'
import SetCategory from './SetCategory'
import SetCategoryLogic from './SetCategoryLogic'

interface Props {
  data: Subcategory
}
function SubCategory({ data }: Props) {
  const { dateAndTimeParser } = DateTimeFormatter()
  const { date, time } = dateAndTimeParser(data.createdAt)
  const [showSetCategory, setShowSetCategory] = useState(false)
  const {initialValues, onSubmit, validationSchema} = SetCategoryLogic({subcategoryId:data.id})
  return (
    <SubCategoryContainer>
      <SubCategoryData>
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
        <td><span className="subcategories__button" onClick={() => setShowSetCategory(prev => !prev)}><i className={ showSetCategory ?"fa-solid fa-chevron-down" : "fa-sharp fa-solid fa-chevron-up"}></i></span></td>
      </SubCategoryData>
      {
        showSetCategory && <><SetCategoryListContainer>
          {
            data?.set_category.map(setCategory => (
              <SetCategory key={setCategory.id} data={setCategory} />
            ))
          }
          
        </SetCategoryListContainer>
          <CreateSubCategoryContainer>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {
                formik => {
                  return <LeftForm autoComplete='off'>
                    <CategoryInputField>
                      <div className='input-field left'>
                        <Field name="setcategory" type="text" placeholder="Name (e.g strawberry, chocolate, etc)" />
                        <ErrorMessage name="setcategory" className='error__message' component={'div'} />
                      </div>

                      <button style={{ width: '200px' }}>Create setcategory</button>
                    </CategoryInputField>
                  </LeftForm>
                }
              }

            </Formik>
          </CreateSubCategoryContainer>
        </>
      }

    </SubCategoryContainer>
  )
}

export default SubCategory