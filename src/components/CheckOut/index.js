import React, { useMemo, useState} from 'react'
import countryList from 'react-select-country-list'
import Select from 'react-select'
import './form.css'
import {useFormik} from 'formik'
import {checkoutSchema} from '../../schemas'
import Navbar from '../Navbar'


const initialValues ={
  name: '',
  email: '',
  postcode: '',
  address: '',
  card: '',
  sec: ''

}


function Checkout() {
  const [value, setValue] = useState('')
  const options = useMemo(()=> countryList().getData(), [])

  let changeHandler =(value)=>{
      setValue(value)
  }

const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
  initialValues, validationSchema: checkoutSchema, onSubmit: (values, actions)=>{
    console.log(values);
    actions.resetForm()
  }
})
  

  return (
<>
<Navbar />
  <div className='form'>
    
    
    <form className='checkout-form' onSubmit={handleSubmit}>
    <h1>Checkout</h1>

      <label htmlFor='name'>Name</label>
      <input type="text" name='name' value={values.name} onBlur={handleBlur} onChange={handleChange} />

      <div className='error-container'>
        {errors.name && touched.name && <p className='form-error'>{errors.name}</p>}
      </div>

      <label htmlFor='email'>Email</label>
      <input type="email" name='email' value={values.email} onBlur={handleBlur} onChange={handleChange}/>
      <div className='error-container'>
        {errors.email && touched.email && <p className='form-error'>{errors.email}</p>}
      </div>

      <label htmlFor='country'>Country</label>
      <Select className='country' options={options} value={value} onChange={changeHandler}/>

      <label htmlFor='postcode'>Postcode</label>
      <input type="text" name='postcode' value={values.postcode} onBlur={handleBlur} onChange={handleChange}/>
      <div className='error-container'>
        {errors.postcode && touched.postcode && <p className='form-error'>{errors.postcode}</p>}
      </div>

      <label htmlFor='address'>Address</label>
      <input type="text" name='address' value={values.address} onBlur={handleBlur} onChange={handleChange}/>
      <div className='error-container'>
        {errors.address && touched.address && <p className='form-error'>{errors.address}</p>}
      </div>

      <label htmlFor='card'>Card</label>
      <input type="text" name='card' value={values.card} onBlur={handleBlur} onChange={handleChange} />

      <div className='error-container'>
        {errors.card && touched.card && <p className='form-error'>{errors.card}</p>}
      </div>

      <label htmlFor='sec'>CVV</label>
      <input type="text" name='sec' value={values.sec} onBlur={handleBlur} onChange={handleChange} />

      <div className='error-container'>
        {errors.sec && touched.sec && <p className='form-error'>{errors.sec}</p>}
      </div>

      <button type='submit'>Checkout</button>
    </form>
  </div>
</>
  )
}


export default Checkout;