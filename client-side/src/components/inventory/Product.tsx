import { useState } from 'react'
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { TableRow } from '../table/components'
import { ActionButtons, ItemRowInfo, ItemRowInfoContainer, LeftProductContent, ProductBottomSide, ProductContainer, RightProductContent } from './components'

function Product() {
  const [toggle, setToggle] = useState(false)
  
  return (
    <ProductContainer>
        <TableRow>
            <td className="image"> <div className='image-border'><img src="/assets/donut.jpg" /></div></td>
            <td className="name">Product one</td>
            <td className="category">Pizza</td>
            <td className="subcategory">Hawaiian</td>
            <td className="price">{productPriceFormatter('250')}</td>
            <td className="stock">Qty: 10</td>
            <td className="action" onClick={() => setToggle(prev => !prev)}><i className="fa-solid fa-chevron-down"></i></td>
        </TableRow>

        {
          toggle && <ProductBottomSide>
          <LeftProductContent>
            <label htmlFor='uploader'>
              <img src="/assets/donut.jpg" />
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
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder={'Name'} />
                </ItemRowInfo>
                <ItemRowInfo>
                    <label htmlFor="">Category</label>
                    <input type="text" placeholder={'Category'} />
                </ItemRowInfo>
                <ItemRowInfo>
                    <label htmlFor="">Subcategory</label>
                    <input type="text" placeholder={'Subcategory'} />
                </ItemRowInfo>
            </ItemRowInfoContainer>
            <ItemRowInfoContainer>
                <ItemRowInfo>
                    <label htmlFor="">Setcategory</label>
                    <input type="text" placeholder={'Setcategory'} />
                </ItemRowInfo>
                <ItemRowInfo>
                    <label htmlFor="">Price</label>
                    <input type="text" placeholder={'Price'} />
                </ItemRowInfo>
                <ItemRowInfo>
                    <label htmlFor="">Stock</label>
                    <input type="text" placeholder={'Stock'} />
                </ItemRowInfo>
            </ItemRowInfoContainer>
            
          </RightProductContent>
        </ProductBottomSide>
        }
    </ProductContainer>
  )
}

export default Product