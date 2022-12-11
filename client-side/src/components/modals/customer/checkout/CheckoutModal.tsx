import { ModalBackdrop } from '../../components'
import { CheckoutButtons, CheckOutModalContainer, FieldInput, FieldRow } from './components'
import { ErrorMessage, Field, Formik } from 'formik'
import Logic from './Logic'

interface Props {
  paymentType: string;
  setOpenCheckoutModal: React.Dispatch<React.SetStateAction<boolean>>,
  totalAmount: number;
}
function CheckoutModal({paymentType, setOpenCheckoutModal, totalAmount}: Props) {

  const {onSubmit, validationSchema, initialValues} = Logic({paymentType, totalAmount})
  return (
    <ModalBackdrop>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {
          formik => <CheckOutModalContainer>

            <span className='closeBtn' onClick={() => setOpenCheckoutModal(false)}><i className="fa-solid fa-x"></i></span>
            
            <h1>Checkout</h1>

            <h4>Fill out the shipping information below</h4>
            <p> <i className="fa-solid fa-info infoIcon"></i> Shipping address</p>

          <FieldRow>
            <FieldInput>
              <label htmlFor="">Barangay</label>
              <Field name="barangay" placeholder="Barangay" />
              <ErrorMessage component={'div'} className="error" name="barangay" />
            </FieldInput>

            <FieldInput>
              <label htmlFor="">House no.</label>
              <Field name="houseNo" placeholder="House no." />
              <ErrorMessage component={'div'} className="error" name="houseNo" />
            </FieldInput>

          </FieldRow>

          <FieldRow>
            <FieldInput>
              <label htmlFor="">Street</label>
              <Field name="street" placeholder="Street" />
              <ErrorMessage component={'div'} className="error" name="street" />
            </FieldInput>

            <FieldInput>
              <label htmlFor="">Contact</label>
              <Field name="contact" placeholder="Contact number" />
              <ErrorMessage component={'div'} className="error" name="contact" />
            </FieldInput>
            
          </FieldRow>

          <FieldRow>
            <FieldInput>
              <label htmlFor="">City</label>
              <Field name="city" placeholder="City">

              </Field>
              <ErrorMessage component={'div'} className="error" name="city" />
            </FieldInput>

            <FieldInput>
              <label htmlFor="">Province</label>
              <Field as="select" name="province" >
                <option value="">Select province</option>
                <option value="bulacan ">Bulacan</option>
              </Field>
              <ErrorMessage component={'div'} className="error" name="province" />
            </FieldInput>
            
          </FieldRow>

          <CheckoutButtons>
            {/* <button>Cancel</button> */}
            <button type='submit'>Proceed</button>
          </CheckoutButtons>
          </CheckOutModalContainer>
        }
      </Formik>


    </ModalBackdrop>
  )
}

export default CheckoutModal