import { ClientRequest } from 'http'
import * as yup from 'yup'
import { CreateSubcategory } from '../../../../model'
import { useCreateSubcategoryMutation } from '../../../../services/subcategory'

interface Props {
    categoryId: number
}
function LeftContentLogic({categoryId}: Props) {

    const initialValues = {
        subcategory:'',
        // price: ''
    }

    const [createSubCategory, {isLoading}] = useCreateSubcategoryMutation()
    const onSubmit = async (values: any, {resetForm}:any) => {
        try {
            const res: any = await createSubCategory({...values, categoryId})
            const {error, data} = res;
            if(error) {
                if (typeof error.data.message) {
                    return alert(error.data.message[0]);
                } else {
                    return alert(error.data.message);
                }
            } else {
                resetForm(initialValues)
                alert('Subcategory Created')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const validationSchema = yup.object().shape({
        subcategory: yup.string()
        .required('subcategory required field')
        .min(3, 'must be atleast 3 characters'),
        // price: yup.string()
        // .matches(/^\d*\.?\d*$/, 'Decimal or number only')
        // .required('Price is required field')
        // .min(0, 'Value cannot be negative')
    })

    return {onSubmit,
initialValues,
validationSchema,}
}

export default LeftContentLogic