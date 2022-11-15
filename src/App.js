import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Route, Link } from 'react-router-dom';
import * as yup from 'yup';

import schema from './validation/formSchema';


import Confirmation from './Components/Confirmation';
import Form from './Components/Form';
import HomePage from './Components/HomePage';


const initialValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  topping5: false,
  topping6: false,
  topping7: false,
  special: '',
}


const initialFormErrors = {
  name: '',
  size: '',
  topping1: '',
  topping2: '',
  topping3: '',
  topping4: '',
  topping5: '',
  topping6: '',
  topping7: '',
  special: '',
} 

const initialDisabled = true


function App() {

  const [formValues, setFormValues] = useState(initialValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const inputChange =(name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  const formSubmit = () => {
  axios.post('https://reqres.in/api/orders', formValues)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
      <nav>
        <h1 className='restaurant-header'>BloomTech Eats</h1>
        <Link to='/'>Home</Link>
        <Link to='/order'>Place Order</Link>
      </nav>
      <Route exact path='/'>
          <HomePage />
      </Route>
      <Route path='/order'> 
        <Form 
        values={formValues}
        change={inputChange}
        disabled={disabled}
        submit={formSubmit}
        />
      </Route>   
    </div>
  );
  
};
export default App;
