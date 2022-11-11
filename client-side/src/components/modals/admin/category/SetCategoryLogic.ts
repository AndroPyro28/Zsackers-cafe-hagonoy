import { ClientRequest } from 'http'
import * as yup from 'yup'
import { CreateSubcategory } from '../../../../model'
import { useCreateSetCategoryMutation } from '../../../../services/set-category'

interface Props {
    subcategoryId: number
}
function FlavorLogic({subcategoryId}: Props) {

    const initialValues = {
        setcategory:'',
    }
    const [createSetategory] = useCreateSetCategoryMutation()
    const onSubmit = async (values: any, {resetForm}:any) => {
        try {
            const res: any = await createSetategory({...values, subcategoryId})
            const {error, data} = res;
            if(error) {
                if (typeof error.data.message) {
                    return alert(error.data.message[0]);
                } else {
                    return alert(error.data.message);
                }
            } else {
                resetForm(initialValues)
                alert('Setcategory Created')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const validationSchema = yup.object().shape({
        setcategory: yup.string()
        .required('Setcategory required field')
        .min(3, 'must be atleast 3 characters'),
        
    })

    return {onSubmit,
initialValues,
validationSchema,}
}

export default FlavorLogic