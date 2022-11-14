import { ErrorMessage, Field, Formik } from 'formik'
import { useState } from 'react'
import DateTimeFormatter from '../../../../helpers/DateTimeFormatter'
import { Subcategory } from '../../../../model'
import { FieldInputContainer } from '../components'
import { CategoryInputField, CreateSubCategoryContainer, SetCategoryListContainer, LeftForm, SubCategoryContainer, SubCategoryData } from './components'
import SetCategory from './SetCategory'
import SetCategoryLogic from './SetCategoryLogic'
import SubCategoryLogic from './SubCategoryLogic'
interface Props {
  data: Subcategory
}
function SubCategory({ data }: Props) {
  const { dateAndTimeParser } = DateTimeFormatter()
  const { date, time } = dateAndTimeParser(data.createdAt)
  const [showSetCategory, setShowSetCategory] = useState(false)
  const [allowUpdate, setAllowUpdate] = useState(false);

  //setcategory concerns
  const { initialValuesCreateSetategory, createSetategory, validationSchema } = SetCategoryLogic({ subcategoryId: data.id })

  // subcategory concerns
  const { validationSchema: validationSchemaUpdateSubcategory, updateSubCategory, deleteSubCategory } = SubCategoryLogic({ setAllowUpdate })

  const initialValuesUpdateSubCategory = {
    id: data.id,
    subcategory: data.name
  }

  return (
    <SubCategoryContainer>
      <Formik
        initialValues={initialValuesUpdateSubCategory}
        validationSchema={validationSchemaUpdateSubcategory}
        onSubmit={updateSubCategory}
      >
        <SubCategoryData>
          {
            allowUpdate ? <FieldInputContainer>
              <Field type="text" name="subcategory" placeholder="subcategory name" />
              <ErrorMessage name="subcategory" component={'div'} className="error__message" />
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
            <span onClick={() => deleteSubCategory(data.id)}>
              <i className="fa-solid fa-eraser"></i>
            </span>
          </td>
          <td><span className="subcategories__button" onClick={() => setShowSetCategory(prev => !prev)}><i className={showSetCategory ? "fa-solid fa-chevron-down" : "fa-sharp fa-solid fa-chevron-up"}></i></span></td>
        </SubCategoryData>
      </Formik>
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
              initialValues={initialValuesCreateSetategory}
              validationSchema={validationSchema}
              onSubmit={createSetategory}
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