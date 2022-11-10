import * as yup from 'yup'
import { Signin } from '../../../model'
import { useSigninMutation } from '../../../services'
import Cookies from 'js-cookie'
import { Navigate, useNavigate } from 'react-router-dom'
function Logic() {
  const [signinMutation] = useSigninMutation()
    const navigate = useNavigate()
  const onSubmit = async (values: Signin) => {
      try {
        const res:any = await signinMutation(values);
        const {error, data} = res;
        if(error) {
          throw new Error(error.data.message)
        }
        else {
          Cookies.set('access_token', data.access_token, {
            secure: true,
            expires: 1
          })
          navigate('/admin/inventory');
        }
      } catch (error: any) {
        console.error(error.message)
      }
    }

    const initialValues = <Signin>{
      email: '',
      password: ''
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