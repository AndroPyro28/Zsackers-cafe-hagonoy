import { createLanguageService } from "typescript";
import * as yup from "yup";
import { CreateProduct } from "../../../../model";
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
          if (typeof error.data.message === 'object') {
            throw new Error(error.data.message[0]);
          } else {
            throw new Error(error.data.message);
          }
        } else {
            resetForm(initialValues)
            alert('Product Created')
        }
      }
    } catch (error: any) {
      alert(error.message)
      console.error(error)
    } 
  };

  const initialValues = {
    productName: '',
    productPrice: '',
    productStock: '',
    details: '',
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
    details: yup.string()
    .typeError('details is required field')
    // required('Product details is required field').
    .min(6, 'Product details must be atleast 6 characters'),
    // .matches(/^[A-Za-z\s]*$/, "Must container letters only"),
    image: yup
      .mixed()
      // .required("Image is required field")
      .test(
        "type",
        "Invalid file format selection",
        (value) =>  value ? SUPPORTED_FORMATS.includes(value.type) : true
      ),
  });
  return {
    onSubmit,
    initialValues,
    validationSchema,
  };
}

export default Logic;
