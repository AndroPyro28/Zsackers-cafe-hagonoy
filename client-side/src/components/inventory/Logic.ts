import { useArchiveProductMutation, useUpdateProductMutation } from "../../services";
import * as yup from 'yup';
import { UpdateProduct } from "../../model";
interface Props {
    imageUrl?: string;
    setDisableUpdate?:React.Dispatch<React.SetStateAction<boolean>>;
    imageFile?: File
}
function Logic({imageUrl, setDisableUpdate, imageFile}: Props) {

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
    categoryId: yup.number().typeError('Category is required field')
    .required('Category is required field'),
    subcategoryId: yup.number().typeError('Subcategory is required field')
    .required('Subcategory is required field'),
    setcategoryId: yup.number().typeError('Setcategory is required field')
    .required('Setcategory is required field'),
    details: yup.string()
    .typeError('details is required field').
    // required('Product name is required field').
    min(6, 'Product details must be atleast 6 characters'),
    // .matches(/^[A-Za-z\s]*$/, "Must container letters only"),
    image_url: yup
      .mixed()
    //   .required("Image is required field")
      .test(
        "type",
        "Invalid file format selection",
        (value) => value ? SUPPORTED_FORMATS.includes(value.type) : true
      ),
  });

  const [updateProduct] = useUpdateProductMutation()
  const onSubmit = async (values: UpdateProduct) => {
    try {
        const res: any = await updateProduct({...values, 
            price: Number(values.price), 
            stock: Number(values.stock),
            categoryId: Number(values.categoryId),
            setcategoryId: Number(values.setcategoryId),
            subcategoryId: Number(values.subcategoryId),
            details: values.details,
            image_url: imageUrl!
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