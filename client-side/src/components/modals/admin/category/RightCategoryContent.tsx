import { Formik, Field, ErrorMessage } from 'formik'
import { CategoryInputField, RightCategoryContentContainer, RightForm } from './components'
import RightContentLogic from './RightContentLogic'

function RightCategoryContent() {

  const {initialValues, validationSchema, onSubmit} = RightContentLogic()
  return (
    <RightCategoryContentContainer>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}      
      >
        {
          formik => {
            return <RightForm autoComplete='off'>
              <h1>Create Category</h1>
              <CategoryInputField>
                <div className='input-field right'>
                  <Field name="category" type="text" placeholder="(e.g Donut, Frapper, etc)" />
                  <ErrorMessage name="category" className='error__message' component={'div'} />
                </div>
                
                <button style={{width:'150px'}}>Create Category</button>
              </CategoryInputField>
            </RightForm>
          }
        }
        
      </Formik>
    </RightCategoryContentContainer>
  )
}

export default RightCategoryContent