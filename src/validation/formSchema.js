import * as yup from 'yup';

const formSchema = yup.object().shape({

  name: yup
    .string()
    .trim()
    .required('A name is required to place an order')
    .min(2, 'Name must be more than 2 characters long.'),
  pizzaSize: yup
    .string()
    .oneOf(['1', '2', '3'])
    .required('Please pick a size.'),
  pizzaSauce: yup
    .string()
    .oneOf(['1', '2', '3'])
    .required('Please pick a type of sauce.'),

  instructions: yup  
    .string()

})

export default formSchema;