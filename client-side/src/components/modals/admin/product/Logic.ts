import * as yup from "yup";
import { CreateProduct } from "../../../../model/Product";
import { useCreateProductMutation } from "../../../../services";

function Logic() {

  const [createProduct] = useCreateProductMutation();
  const onSubmit = (values: CreateProduct, {resetForm}: any) => {
    try {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(values.image);
      fileReader.onloadend = async () => {
        const res: any = await createProduct({...values, image: fileReader.result});
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
      }
    } catch (error) {
      console.error(error)
    }
  };

  const initialValues = {
    productName: '',
    productPrice: '',
    productStock: '',
    image: '',
    categoryId: '',
    subcategoryId: '',
    setcategoryId: ''
  };

  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/png",
    "image/jpeg",
    "image/gif",
  ];

  const validationSchema = yup.object().shape({
    productName: yup.string().
    required('Product name is required field').
    min(6, 'Product name must be atleast 6 characters')
    .matches(/^[A-Za-z\s]*$/, "Must container letters only"),
    productPrice: yup.number()
    .required('Product price is required field')
    .min(0, 'Product price must be minimum of 0'),
    productStock: yup.number()
    .required('Product stock is required field')
    .min(0, 'Product stock must be minimum of 0'),
    categoryId: yup.number()
    .required('Category is required field'),
    subcategoryId: yup.number()
    .required('Subcategory is required field'),
    setcategoryId: yup.number()
    .required('Setcategory is required field'),
    image: yup
      .mixed()
      .required("Image is required field")
      .test(
        "type",
        "Invalid file format selection",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
  });
  return {
    onSubmit,
    initialValues,
    validationSchema,
  };
}

export default Logic;
