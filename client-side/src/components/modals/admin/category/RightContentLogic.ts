import * as yup from 'yup'
import { useCreateCategoryMutation } from '../../../../services'

function RightContentLogic() {

    const initialValues = {
        category:''
    }

    const [createCategory, {isLoading}] = useCreateCategoryMutation()
    const onSubmit = async (values: any, {resetForm}:any) => {
        try {
            const res: any = await createCategory(values);
            const {error, data} = res;
            if(error) {
                if (typeof error.data.message) {
                    return alert(error.data.message[0]);
                } else {
                    return alert(error.data.message);
                }
            } else {
                resetForm(initialValues)
                alert('Category Created')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const validationSchema = yup.object().shape({
        category: yup.string()
        .required('category required field')
        .min(3, 'must be atleast 3 characters')
        .matches(/^[A-Za-z\s]*$/, "Must container letters only")
    })

    return {onSubmit,
initialValues,
validationSchema,}
}

export default RightContentLogic