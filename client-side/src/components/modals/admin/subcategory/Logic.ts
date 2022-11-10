import * as yup from "yup";

function Logic() {
  const onSubmit = () => {
    
  };

  const initialValues = {
    subcategory: "",
  };

  const validationSchema = yup.object().shape({
    subcategory: yup
      .string()
      .required("Subcategory is required field")
      .min(3, "Subcategory must be atleast 3 characters")
      .matches(/^[A-Za-z\s]*$/, "Must container letters only"),
  });

  return { onSubmit, initialValues, validationSchema };
}

export default Logic;
