import React from "react";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { getCartProducts } from "../../../../features";
import { useCheckoutOrderMutation } from "../../../../services/order";
import {toast} from 'react-toastify'
interface Props {
  paymentType: string;
  totalAmount: number;
}

function Logic({ paymentType, totalAmount }: Props) {
  const initialValues = {
    barangay: "",
    houseNo: "",
    street: "",
    contact: "",
    city: "",
    province: "",
  };

  const digitsOnly = (value: any) => /^\d+$/.test(value);

  const validationSchema = yup.object().shape({
    barangay: yup.string().required("This field is required"),
    houseNo: yup.string().required("This field is required"),
    street: yup.string().required("This field is required"),
    contact: yup
      .string()
      .required("This field is required")
      .test("Digits only", "The field should have digits only", digitsOnly),
    city: yup.string().required("This field is required"),
    province: yup.string().required("This field is required"),
  });

  const cartProducts = useSelector(getCartProducts);
  const [checkoutOrderMutation] = useCheckoutOrderMutation();
  const onSubmit = async (values: any) => {
    try {
      console.log('submitting')
      const { barangay, houseNo, street, contact, city, province } = values;
      const address = `${houseNo} ${street} ${barangay} ${city} ${province}`;

      const result: any = await checkoutOrderMutation({
        contact,
        address,
        cartProducts,
        paymentType,
        totalAmount,
      });


      const { checkouturl, order_id, proceedPayment } = result.data;
      if (!proceedPayment) {
        return toast('Out of stock', {type: 'warning'});
      }
      localStorage.setItem(
        "onCheckoutProducts",
        JSON.stringify({
          contact,
          address,
          cartProducts,
          paymentType,
          order_id,
          totalAmount: Math.round(totalAmount * 0.1 + totalAmount),
          proceedPayment
        })

      );
      window.location.assign(checkouturl)

    } catch (error) {
      console.error(error);
    }
  };
  return {
    initialValues,
    validationSchema,
    onSubmit,
  };
}

export default Logic;
