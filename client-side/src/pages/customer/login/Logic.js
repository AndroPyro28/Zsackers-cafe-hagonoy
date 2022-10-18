import React from 'react'
import * as yup from 'yup'
function Logic() {
    const onSubmit = (values) => {

    }

    const initialValues = {

    }

    const validationSchema = yup.object().shape({
        email: yup.string().required('This field is required').email('This must be a valid email'),
        password: yup.string().required('This field is required')
    })
  return {
    onSubmit,
    initialValues,
    validationSchema,

  }
}

export default Logic