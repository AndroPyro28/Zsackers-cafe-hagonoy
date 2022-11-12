import { useArchiveProductMutation, useUpdateProductMutation } from "../../services";
import * as yup from 'yup';
import { UpdateProduct } from "../../model";
interface Props {
    imageUrl?: string;
    setDisableUpdate?:React.Dispatch<React.SetStateAction<boolean>>
}
function Logic({imageUrl, setDisableUpdate}: Props) {

    const handleChange = (setFunction: React.Dispatch<React.SetStateAction<number>>, value: any ) => {
        setFunction(Number(value))
    }

    const [archiveProduct] = useArchiveProductMutation();
    const handleDelete = async (id: number) => {
        try {
            const res: any = await archiveProduct(id);
            const {error, data} = res;
            if(error) {
                throw new Error(error.data.message)
            }
            else {
                alert('product deleted!');
              }
        } catch (error) {
            console.error(error)
        }
    }

    const SUPPORTED_FORMATS = [
        "image/jpg",
        "image/png",
        "image/jpeg",
        "image/gif",
      ];

    const validationSchema = yup.object().shape({
    id: yup.number().required('id is required'),
    productName: yup.string().
    required('Product name is required field').
    min(6, 'Product name must be atleast 6 characters')
    .matches(/^[A-Za-z\s]*$/, "Must container letters only"),
    price: yup.number()
    .required('Product price is required field')
    .min(0, 'Product price must be minimum of 0'),
    stock: yup.number()
    .required('Product stock is required field')
    .min(0, 'Product stock must be minimum of 0'),
    categoryId: yup.number()
    .required('Category is required field'),
    subcategoryId: yup.number()
    .required('Subcategory is required field'),
    setcategoryId: yup.number()
    .required('Setcategory is required field'),
    image_url: yup
      .mixed()
      .required("Image is required field")
      .test(
        "type",
        "Invalid file format selection",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  const [updateProduct] = useUpdateProductMutation()
  const onSubmit = async (values: UpdateProduct) => {
    try {
        values.image_url = imageUrl!;
        console.log(values);
        const res: any = await updateProduct({...values, 
            price: Number(values.price), 
            stock: Number(values.stock),
            categoryId: Number(values.categoryId),
            setcategoryId: Number(values.setcategoryId),
            subcategoryId: Number(values.subcategoryId)
        });
        const {error, data} = res;
        console.log(res);
            if(error) {
                throw new Error(error.data.message)
            }
            else {
                setDisableUpdate!(true)
                alert('product updated!');
            }
    } catch (error) {
        console.error(error)
    }
  }

    return { handleChange, handleDelete, validationSchema, onSubmit }
}

export default Logic