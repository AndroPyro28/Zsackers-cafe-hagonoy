import { useState } from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { Product as ProductInterface} from '../../model'
import { TableRow } from '../table/components'
import { ActionButtons, ItemRowInfo, ItemRowInfoContainer, LeftProductContent, ProductBottomSide, ProductContainer, RightProductContent } from './components'
interface Props {
  data: ProductInterface
}
function Product({data}: Props) {
  console.log(data)
  const [toggle, setToggle] = useState(false)
  const {productName, price, category, sub_category, set_category, stock, image_url } = data;
  
  return (
    <ProductContainer>
        <TableRow>
            <td className="image"> <div className='image-border'><img src={image_url} /></div></td>
            <td className="name">{productName}</td>
            <td className="category">{category.name}</td>
            <td className="subcategory">{sub_category.name}</td>
            <td className="price">{productPriceFormatter(price)}</td>
            <td className="stock">Qty: {stock} </td>
            <td className="action" onClick={() => setToggle(prev => !prev)}><i className="fa-solid fa-chevron-down"></i></td>
        </TableRow>

        {
          toggle && <ProductBottomSide>
          <LeftProductContent>
            <label htmlFor='uploader'>
              <img src={image_url} />
            </label>

            <input type="file" id="uploader" style={{display:'none'}} />
            <ActionButtons>
              <button>Update</button>
              <button>Delete</button>
            </ActionButtons>
          </LeftProductContent>

          <RightProductContent>
            <ItemRowInfoContainer>
                <ItemRowInfo>
                    <label htmlFor="">{productName}</label>
                    <input type="text" placeholder={'Name'} />
                </ItemRowInfo>
                <ItemRowInfo>
                    <label htmlFor="">Price</label>
                    <input type="number" placeholder={'Price'} />
                </ItemRowInfo>
                <ItemRowInfo>
                    <label htmlFor="">Stock</label>
                    <input type="number" placeholder={'Stock'} />
                </ItemRowInfo>
                
            </ItemRowInfoContainer>
            <ItemRowInfoContainer>
                <ItemRowInfo>
                    <label htmlFor="">Setcategory</label>
                    <select placeholder={'Setcategory'} >
                      <option>Select Setcategory</option>
                    </select>
                </ItemRowInfo>

                <ItemRowInfo>
                    <label htmlFor="">Category</label>
                    <select placeholder={'Category'} >
                      <option>Select Category</option>
                    </select>
                </ItemRowInfo>
                <ItemRowInfo>
                    <label htmlFor="">Subcategory</label>
                    <select placeholder={'Subcategory'} >
                      <option>Select Subcategory</option>
                    </select>
                </ItemRowInfo>
                
            </ItemRowInfoContainer>
            
          </RightProductContent>
        </ProductBottomSide>
        }
    </ProductContainer>
  )
}

export default Product