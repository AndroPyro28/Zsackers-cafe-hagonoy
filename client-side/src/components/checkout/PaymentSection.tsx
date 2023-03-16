import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAddedProductToCheckout, getCartProducts } from '../../features';
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import { CartProduct } from '../../model';
import { useGetCartProducts } from '../../services/cart-products';
import CheckoutModal from '../modals/customer/checkout/CheckoutModal';
import { Payment, Payments, PaymentSectionContainer, PaymentType, Title, SummaryContainer, Summary, ChekoutButton } from './components'

function PaymentSection() {

  const [paymentType, setPaymentType] = useState<string>('cod')
  const [openCheckoutModal, setOpenCheckoutModal] = useState(false);
  // const{data: cartProducts, isLoading} = useGetCartProducts();

  const selectPayment = (payment: string) => setPaymentType(payment);

  const checkoutCartProducts: CartProduct[] = useSelector(getCartProducts)
  const totalPrice = useSelector(getAddedProductToCheckout)

    // const total = checkoutCartProducts.reduce((total: any, cartProduct) => {
    //   const cartProductFound: any = cartProducts?.find((cart) => cart.id == cartProduct.id );

    //   if(cartProductFound?.Cart_Product_Variant.length > 0) {
    //     const addonsPrice = cartProductFound.Cart_Product_Variant.reduce((totalAddonsValue: number, addon: CartProduct) => {
    //       const addonPrice = addon.product.productType === 'ADDONS' ? addon?.product.price : 0;
    //       return addonPrice + totalAddonsValue
    //     }, 0)

    //     return (addonsPrice + total + cartProduct.product.price) * cartProduct.quantity
    //   }

    //   return (total + cartProduct.product.price) * cartProduct.quantity
    // }, 0)

  const handleClick = () => {
    if(checkoutCartProducts.length <= 0 ) {
      return toast('please checkout a product first', {type: 'info'})
    }
    setOpenCheckoutModal(true)
  } 

  return (
    <PaymentSectionContainer>
      {
        openCheckoutModal && <CheckoutModal paymentType={paymentType} totalAmount={totalPrice} setOpenCheckoutModal={setOpenCheckoutModal}/>
      }
      <Title>
        Payment
      </Title>

      <PaymentType>
        <h3>Choose your prefered payment method</h3>

        <Payments>

        <Payment onClick={() => selectPayment('cod')} isSelected={paymentType === 'cod'}>
          <img src="/assets/cod.jpg" alt="" />
          </Payment>

          <Payment onClick={() => selectPayment('gcash')} isSelected={paymentType === 'gcash'}>
              <img src="/assets/gcash.png" alt="" />
          </Payment>
          
        </Payments>
      </PaymentType>

      <SummaryContainer>
        <Summary>
          <span>Subtotal</span>
          <span>{productPriceFormatter('' + totalPrice)}</span>
        </Summary>

        <Summary>
          <span>Shipping</span>
          <span>{productPriceFormatter('' + (totalPrice > 0 ? 40 : 0))}</span>
        </Summary>

        <Summary>
          <span>Total</span>
          <span>{productPriceFormatter('' + (totalPrice > 0 ? 40 + totalPrice : 0))}</span>
        </Summary>
      </SummaryContainer>

      <ChekoutButton onClick={handleClick}>
        <span className='total'> {productPriceFormatter('' + (totalPrice > 0 ? 40 + totalPrice : 0))} </span>
        <span className='title'>Checkout by {paymentType} <i className="fa-solid fa-arrow-right"></i></span>
      </ChekoutButton>
    </PaymentSectionContainer>
  )
}

export default PaymentSection