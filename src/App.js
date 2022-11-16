import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Route, Link } from 'react-router-dom';
import * as yup from 'yup';
import './App.css';

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
  pizzaSize: '',
  pizzaSauce: '',
} 

const initialDisabled = true


function App() {

  const [formValues, setFormValues] = useState(initialValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [orders, setOrders] = useState([])

  const inputChange =(name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  const onSubmit = evt => {
      evt.preventDefault()
      const newOrder= {
        name: formValues.name.trim(),
        pizzaSize: formValues.pizzaSize.trim(),
        pizzaSauce: formValues.pizzaSauce.trim(),
        instructions: formValues.instructions.trim(),
        toppings: ['mushrooms', 'pepperroni', 'sausage', 'jalapeños', 'spinach', 'olives', 'bacon'].filter(topping => !!formValues[topping])
      };
      postNewOrder(newOrder);
    }

  const postNewOrder = newOrder => {
  axios.post("https://reqres.in/api/orders", newOrder)
    .then(res => {
      console.log(res.data);
      setOrders([res.data, ...orders])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialValues));
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
        <Link to='/pizza' id='order-pizza'>Order Pizza</Link>
      </nav>
      <Route exact path='/'>
          <HomePage />
      </Route>
      <Route path='/pizza'> 
        <Form 
        values={formValues}
        change={inputChange}
        disabled={disabled}
        submit={postNewOrder}
        onSubmit={onSubmit}
        errors={formErrors}
        />
      </Route> 
      <Route exact path='/confirmation'>
        <Confirmation /> 
      </Route>  
    </div>
  );
  
};
export default App;
