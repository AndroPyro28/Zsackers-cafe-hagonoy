import * as yup from 'yup'
import { Signin } from '../../../model'
import { useSigninMutation } from '../../../services'

function Logic() {
  const [signinMutation] = useSigninMutation()
    
  const onSubmit = async (values: Signin) => {
      try {
        const res:any = await signinMutation(values);
        const {error, data} = res;
        if(error) {
          throw new Error(error.data.message)
        }
        else {
          console.log(data.access_token);
          alert('successfull')
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