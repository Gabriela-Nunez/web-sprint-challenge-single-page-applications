import React from "react";



const Form = (props) => {

  const { 
    values,
    submit,
    change,
    disabled,
    errors, 
  } = props;

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type ==='checkbox' ? checked : value;
    change(name, value)
  }

  return(
    <div>
      <h2>Build Your Pizza</h2>
      <form id='pizza-form' onSubmit={onSubmit}>
        <label>Name:
          <input 
            type='text'
            placeholder='Your name goes here'
            name='name'
            id='name-input'
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>Pick a Size
          <select 
            name='pizzaSize' 
            id='size-dropdown'
            values={values.pizzasize}
            onChange={onChange}
            >
              <option value='1'>SMALL (10 inches)</option>
              <option value='2'>MEDIUM (14 inches)</option>
              <option value='3'>LARGE (16 inches)</option>
          </select>
        </label>
        <label>Pick A Sauce
          <select 
            name='pizzaSauce'
            onChange={onChange}
            value={values.pizzaSauce}
            >
              <option value='1'>Marinara Sauce</option>
              <option value='2'>Buffalo Sauce</option>
              <option value='3'>White Garlic Sauce</option>
          </select>
        </label>
        <label>Add Your Toppings
            <input type='checkbox' name='mushrooms' onChange={onChange} value={values.mushrooms}/>Mushrooms
            <input type='checkbox' name='pepperoni' onChange={onChange} value={values.pepperoni}/>Pepperoni 
            <input type='checkbox' name='sausage' onChange={onChange} value={values.sausage}/>Sausage
            <input type='checkbox' name='jalapeños' onChange={onChange} value={values.jalapeños}/>Jalapeños 
            <input type='checkbox' name='spinach' onChange={onChange} value={values.spinach}/>Spinach 
            <input type='checkbox' name='olives' onChange={onChange} value={values.olives}/>Olives 
            <input type='checkbox' name='bacon' onChange={onChange} value={values.bacon}/>Bacon
        </label>
        <label>Special Instructions
          <input 
          name='instructions'
          type='text' 
          placeholder='Instructions Here'
          value={values.instructions}
          onChange={onChange}
          />
        </label>
        <input type='submit' value='Order Pizza' disabled={disabled}/>
      </form>
    </div> 
  )
}

export default Form;