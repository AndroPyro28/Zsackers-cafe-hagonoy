import { ErrorMessage, Field, Formik } from 'formik'
import { useState } from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { Category, Product as ProductInterface } from '../../model'
import { TableRow } from '../table/components'
import { ActionButtons, ItemRowInfo, ItemRowInfoContainer, LeftProductContent, ProductBottomSide, ProductContainer, RightProductContent } from './components'
import Logic from './Logic'
interface Props {
  data: ProductInterface;
  categories: Category[]
}
function Product({ data, categories }: Props) {
  const [toggle, setToggle] = useState(false)
  const { productName, price, category, sub_category, stock, image_url, id, categoryId, setcategoryId, subcategoryId } = data;
  const [imageFile, setImageFile] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<any>(null);
  const [disableUpdate, setDisableUpdate] = useState(true)
  const { handleDelete, onSubmit, validationSchema } = Logic({imageUrl, setDisableUpdate, imageFile})

  const getBase64FromUrl = async (url:string) => {
    const data = await fetch(url);
    const blob = await data.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        if(!imageFile) {
          setImageFile(blob)
          setImageUrl(reader.result)
        }
      };
  };

  getBase64FromUrl(data.image_url)

  const initialValues = {
    id,
    productName,
    price,
    stock,
    image_url:imageFile,
    image_id: data.image_id,
    categoryId: data.categoryId,
    subcategoryId: data.subcategoryId,
    setcategoryId: data.setcategoryId,
  } 

  return (
    <ProductContainer>
      <TableRow>
        <td className="image"> <div className='image-border'><img src={imageUrl} /></div></td>
        <td className="name">{productName}</td>
        <td className="category">{category?.name}</td>
        <td className="subcategory">{sub_category?.name}</td>
        <td className="price">{productPriceFormatter(price + '')}</td>
        <td className="stock">Qty: {stock} </td>
        <td className="action" onClick={() => setToggle(prev => !prev)}><i className="fa-solid fa-chevron-down"></i></td>
      </TableRow>
      {
        toggle && <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {
            formik => {
              const onUploadChange = (e: any) => {
                if (!e.target.files) return;
                const file = e.target.files[0]
                formik.setTouched({
                    ...formik.touched,
                    image_url: true,
                });
                formik.setFieldValue("image_url", file);
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onloadend = () => {
                  setImageUrl(fileReader.result)
                }
            };
              const findCategory = () => {
                return categories?.find(value => value.id === Number(formik.values.categoryId))
              }

              const findSubcategory = () => {
                return findCategory()?.sub_category?.find(value => value.id === Number(formik.values.subcategoryId))
              }
            
              const fetchCategories = categories?.map((category) => (
                <option value={category?.id} key={category?.id}>{category?.name}</option>
              ))
            
              const fetchSubCategories = findCategory()?.sub_category.map((subcategory) => (
                <option value={subcategory?.id} key={subcategory?.id}>{subcategory?.name}</option>
              ))
            
              const fetchSetCategories = findSubcategory()?.set_category.map((setcategory) => (
                <option value={setcategory?.id} key={setcategory?.id}>{setcategory?.name}</option>
              ))
              return <ProductBottomSide>
                <LeftProductContent disableUpdate={disableUpdate}>
                  <label htmlFor='image_url'>
                    <img src={imageUrl} />
                  </label>
                  <ErrorMessage name="image_url" component={'div'} className="error__message" />
                  <input name="image_url" style={{display:'none'}} type="file" id="image_url" disabled={disableUpdate} onChange={onUploadChange} />
                  <ActionButtons>
                    {
                      disableUpdate ? <input type="button" value={'Edit'} onClick={() => setDisableUpdate(false)} /> :
                      <button>Save</button>
                    }
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </ActionButtons>
                </LeftProductContent>

                <RightProductContent>
                  <ItemRowInfoContainer>
                    <ItemRowInfo>
                      <label htmlFor="productName">Name</label>
                      <Field name="productName" id="productName"  disabled={disableUpdate} />
                      <ErrorMessage name="productName" component={'div'} className="error__message" />
                    </ItemRowInfo>
                    <ItemRowInfo>
                      <label htmlFor="price">Price</label>
                      <Field name="price" id="price" type="number" disabled={disableUpdate} />
                      <ErrorMessage name="price" component={'div'} className="error__message" />
                    </ItemRowInfo>
                    <ItemRowInfo>
                      <label htmlFor="stock">Stock</label>
                      <Field name="stock" id="stock" type="number" disabled={disableUpdate} />
                      <ErrorMessage name="stock" component={'div'} className="error__message" />
                    </ItemRowInfo>

                  </ItemRowInfoContainer>
                  <ItemRowInfoContainer>

                  <ItemRowInfo>
                      <label htmlFor="categoryId">Category</label>
                      <Field as={'select'} name="categoryId" id="categoryId" disabled={disableUpdate} >
                        <option value="">Select Category</option>
                        {fetchCategories}
                      </Field>
                      <ErrorMessage name="categoryId" component={'div'} className="error__message" />
                    </ItemRowInfo>

                    <ItemRowInfo>
                      <label htmlFor="subcategoryId">Setcategory</label>
                      <Field as={'select'} name="subcategoryId" id="subcategoryId" disabled={disableUpdate} >
                        <option value="">Select Subcategory</option>
                        {fetchSubCategories}
                      </Field>
                      <ErrorMessage name="subcategoryId" component={'div'} className="error__message" />
                    </ItemRowInfo>
                    
                    <ItemRowInfo>
                      <label htmlFor="setcategoryId">Setcategory</label>
                      <Field as={'select'} name={'setcategoryId'} id="setcategoryId" disabled={disableUpdate} >
                        <option value="">Select Setcategory</option>
                        {fetchSetCategories}
                      </Field>
                      <ErrorMessage name="setcategoryId" component={'div'} className="error__message" />
                    </ItemRowInfo>
                  </ItemRowInfoContainer>
                </RightProductContent>
              </ProductBottomSide>
            }
          }

        </Formik>
      }
    </ProductContainer>
  )
}

export default Product