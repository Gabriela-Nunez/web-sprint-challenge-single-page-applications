import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Route } from 'react-router-dom';
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
      <h1 className="title" >BloomTech Eats</h1>
      <Route path='/'>
        <HomePage />
      </Route>
      
      <Form 
      values={formValues}
      change={inputChange}
      disabled={disabled}
      submit={formSubmit}
      />
      <Confirmation />
    </div>
  );
  
};
export default App;
