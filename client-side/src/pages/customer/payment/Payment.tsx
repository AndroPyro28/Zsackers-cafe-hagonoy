
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import productPriceFormatter from '../../../helpers/ProductPriceFormatter'
import { useCreateOrderMutation } from '../../../services'
import { Line, PaymentData, PaymentSuccessContainer, ProceedButton, Title, TransactionNumber } from './components'

function Payment() {
  const navigate = useNavigate()
  const [createOrderMutation] = useCreateOrderMutation()
  const [loading, setLoading] = useState(true);

  const createOrder = async () => {

    const checkoutInfo = JSON.parse(localStorage.getItem("onCheckoutProducts")!);
    const { contact,
      address,
      cartProducts,
      paymentType,
      order_id,
      totalAmount, } = checkoutInfo;

    const inFiveMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
    Cookies.set('onCheckoutProducts', JSON.stringify({ paymentType, order_id, totalAmount }), {
      expires: inFiveMinutes
    })
    const res = await createOrderMutation({
      contact,
      address,
      cartProducts,
      paymentType,
      totalAmount,
      order_id,
    })
    alert('success payment api')
    localStorage.removeItem("onCheckoutProducts");

  }

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        if (!localStorage.getItem("onCheckoutProducts")!) {
          // throw new Error('error')
        } else {
          createOrder()
        }
        setLoading(false)

      } catch (error) {
        console.error('error ', error)
      }
    })()
  }, [])

  if (loading) return <></>

  try {
    const checkoutSummary = JSON.parse(Cookies.get('onCheckoutProducts')!)
  } catch (error) {
    window.location.assign("/customer/checkout");
  }

  const {
    paymentType, order_id, totalAmount
  } = JSON.parse(Cookies.get('onCheckoutProducts')!);

  return (
    <PaymentSuccessContainer>
      {/* <ToastContainer autoClose={1500} /> */}

      <i className="fa-solid fa-circle-check checkIcon"></i>

      <Title>
        <h1>Payment Successful</h1>
        <p>Your payment has been processed!</p>
        <small>Details of transaction are included below</small>
      </Title>

      <Line />

      <TransactionNumber>Transaction ID: {order_id}</TransactionNumber>

      <PaymentData>
        <span>TOTAL AMOUNT PAID</span>
        <strong>{productPriceFormatter('' + totalAmount)}</strong>
      </PaymentData>

      <Line />

      <PaymentData>
        <span>payed by</span>
        <strong>{paymentType}</strong>
      </PaymentData>

      <Line />

      <ProceedButton onClick={() => window.location.assign('/customer/purchases')}>
        Proceed
      </ProceedButton>
    </PaymentSuccessContainer>
  )
}

export default Payment