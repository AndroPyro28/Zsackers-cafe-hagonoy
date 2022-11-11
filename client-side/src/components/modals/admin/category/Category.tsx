import { ErrorMessage, Field, Formik } from 'formik';
import { useState } from 'react'
import DateTimeFormatter from '../../../../helpers/DateTimeFormatter';
import { Category as CategoryInterface} from '../../../../model/Category';
import { CategoryContainer, CategoryWrapper, SubCategoryListContainer, CreateSubCategoryContainer, CategoryInputField, LeftForm } from './components'
import LeftContentLogic from './LeftContentLogic';
import SubCategory from './SubCategory';

function Category({data}: {data: CategoryInterface}) {
  const [showSubCategories, setShowSubCategories] = useState(false);
  const {initialValues,
    validationSchema,
    onSubmit} = LeftContentLogic({categoryId: data.id})

    const {dateAndTimeParser} = DateTimeFormatter()
    const {date, time} = dateAndTimeParser(data.createdAt)
    const {sub_category} = data;
  return (
    <CategoryWrapper>
      <CategoryContainer>
          <td>{data.name}</td>
          <td>{date} at {time}</td>
          <td>
            <span>
            <i className="fa-solid fa-file-pen"></i>
            </span>
            <span>
            <i className="fa-solid fa-eraser"></i>
            </span>
          </td>
          <td><span className="subcategories__button" onClick={() => setShowSubCategories(prev => !prev)}><i className={ showSubCategories ? "fa-solid fa-chevron-down" : "fa-sharp fa-solid fa-chevron-up"}></i></span></td>
      </CategoryContainer>
      
      {
        showSubCategories && <SubCategoryListContainer>

          {
            sub_category && sub_category.map((subcategory) => (
              <SubCategory key={subcategory.id} data={subcategory} />
            ))
          }

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
                  <Field name="subcategory" type="text" placeholder="Name (e.g 1 piece, bundle, etc)" />
                  <ErrorMessage name="subcategory"  className='error__message' component={'div'} />
                </div>
                
                <button style={{width:'200px'}}>Create Subcategory</button>
              </CategoryInputField>
            </LeftForm>
          }
        }
        
      </Formik>
        </CreateSubCategoryContainer>
      </SubCategoryListContainer>
      }
      
    </CategoryWrapper>

  )
}

export default Category