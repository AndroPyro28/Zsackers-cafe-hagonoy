import { ErrorMessage, Field, Formik } from 'formik';
import { FieldInputContainer, FormFieldContainer, FormFormik, InventoryCreateModalBackdrop } from '../components';
import Logic from './Logic';

function SubcategoryCreateModal() {

    const { onSubmit,
        validationSchema,
        initialValues, } = Logic()

    return (
        <InventoryCreateModalBackdrop>
            <Formik
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                initialValues={initialValues}
            >
                {
                    formik => (
                        <FormFormik autoComplete='off'>
                            <h1>Add New Subcategory</h1>

                            <FormFieldContainer>
                                <label htmlFor="category">`Subcategory Name`</label>
                                <FieldInputContainer>
                                    <Field name="category" id="category" type="text" placeholder="Product Name" />
                                    <ErrorMessage name="category" component={'div'} className="error__message" />
                                </FieldInputContainer>
                            </FormFieldContainer>

                            <button>Create Subcategory</button>
                        </FormFormik>
                    )
                }
            </Formik>
        </InventoryCreateModalBackdrop>
    )
}

export default SubcategoryCreateModal