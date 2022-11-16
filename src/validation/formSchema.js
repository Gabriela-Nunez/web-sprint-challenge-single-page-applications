import * as yup from 'yup';

const formSchema = yup.object().shape({

  name: yup
    .string()
    .trim()
    .required('A name is required to place an order')
    .min(2, 'name must be at least 2 characters'),
  pizzaSize: yup
    .string()
    .oneOf(['small', 'medium', 'large'])
    .required('Please pick a size.'),
  pizzaSauce: yup
    .string()
    .oneOf(['marinara', 'buffalo', 'garlic'])
    .required('Please pick a type of sauce.'),

  instructions: yup  
    .string(),

  mushrooms: yup
    .boolean(),

  pepperoni:yup
  .boolean(),
  
  sausage: yup
  .boolean(),

  jalapeños:yup
  .boolean(),

  spinach:yup
  .boolean(),

  olives:yup
  .boolean(),

  bacon:yup
  .boolean()
})

export default formSchema;