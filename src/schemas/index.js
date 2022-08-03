import * as Yup from 'yup'

export const checkoutSchema = Yup.object({
    name: Yup.string().min(3).required('Please enter your name'),
    email: Yup.string().email('Please enter valid email').required('Please enter your email'),
    postcode: Yup.string().min(6).required('Please enter your post code'),
    address: Yup.string().min(5).required('Please enter your address'),
    card: Yup.string().min(10).required('please enter card details'),
    sec: Yup.string().min(3).max(3).required('Please enter CVV')

})

