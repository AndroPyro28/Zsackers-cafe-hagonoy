import * as yup from "yup";
import { UpdateCategory } from "../../../../model";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "../../../../services";

interface Props {
  setAllowUpdate?: React.Dispatch<React.SetStateAction<boolean>>;
}
function CategoryLogic({ setAllowUpdate }: Props) {
  const initialValues = {
    category: "",
  };

  const [createCategoryMutation, { isLoading }] = useCreateCategoryMutation();
  const createCategory = async (values: any, { resetForm }: any) => {
    try {
      const res: any = await createCategoryMutation(values);
      const { error, data } = res;
      if (error) {
        if (typeof error.data.message === "object") {
          throw new Error(error.data.message[0]);
        } else {
          throw new Error(error.data.message);
        }
      } else {
        resetForm(initialValues);
        alert("Category Created");
      }
    } catch (error: any) {
      alert(error.message);
      console.error(error);
    }
  };
  const validationSchema = yup.object().shape({
    category: yup
      .string()
      .required("category required field")
      .min(3, "must be atleast 3 characters")
      .matches(/^[A-Za-z\s]*$/, "Must container letters only"),
  });
  const [updateCategoryMutation] = useUpdateCategoryMutation();
  const updateCategory = async (values: UpdateCategory, { resetForm }: any) => {
    try {
      const res: any = await updateCategoryMutation(values);
      const { error, data } = res;
      if (error) {
        if (typeof error.data.message === "object") {
          throw new Error(error.data.message[0]);
        } else {
          throw new Error(error.data.message);
        }
      } else {
        alert("Category Updated");
      }
    } catch (error: any) {
      alert(error.message);
      console.error(error);
    } finally {
      setAllowUpdate!(false)
    }
  };
  const [deleteCategoryMutation] = useDeleteCategoryMutation();
  const deleteCategory = async (id: number) => {
    try {
      const res: any = await deleteCategoryMutation(id);
      const { error, data } = res;
      if (error) {
        if (typeof error.data.message === "object") {
          throw new Error(error.data.message[0]);
        } else {
          throw new Error(error.data.message);
        }
      } else {
        alert("Category Deleted");
      }
    } catch (error: any) {
      alert(error.message);
      console.error(error);
    } finally {
      setAllowUpdate!(false)
    }
  };
  

  return { createCategory, initialValues, validationSchema, updateCategory, deleteCategory };
}

export default CategoryLogic;
