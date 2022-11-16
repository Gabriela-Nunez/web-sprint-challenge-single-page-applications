import React from "react";
import './Form.css';
import { useHistory } from "react-router-dom";





const Form = (props) => {

  const history = useHistory();

  const confirmation = () => {
    history.push('/confirmation')
  }

  const { 
    values,
    submit,
    change,
    disabled,
    errors, 
  } = props;

  // const onSubmit = evt => {
  //   evt.preventDefault()
  //   submit()
  // }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type ==='checkbox' ? checked : value;
    change(name, valueToUse)
  }

  return(
    <div>
      <h2>Build Your Pizza</h2>
      <div className='errors'>
        <div>{errors.name}</div>
        <div>{errors.pizzaSize}</div>
        <div>{errors.pizzaSauce}</div>
      </div>

      <div className='form'>
      <img
        className='form-image'
        src='./images/orderPic.jpg'
        alt='pizza in an oven'
      />
      
      <form id='pizza-form' onSubmit={submit}>
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
            values={values.pizzaSize}
            onChange={onChange}
            >
              <option value=''>--SIZE--</option>
              <option value='small'>SMALL (10 inches)</option>
              <option value='medium'>MEDIUM (14 inches)</option>
              <option value='large'>LARGE (16 inches)</option>
          </select>
        </label>
        <label>Pick A Sauce
          <select 
            name='pizzaSauce'
            onChange={onChange}
            value={values.pizzaSauce}
            >
              <option>--SAUCE--</option>
              <option value='marinara'>Marinara Sauce</option>
              <option value='buffalo'>Buffalo Sauce</option>
              <option value='garlic'>White Garlic Sauce</option>
          </select>
        </label>
        <div>
        <label>Mushrooms
            <input type='checkbox' name='mushrooms' onChange={onChange} value={values.mushrooms}/>
        </label>
        <label>Pepperoni    
            <input type='checkbox' name='pepperoni' onChange={onChange} value={values.pepperoni}/>
        </label>
        <label>Sausage    
            <input type='checkbox' name='sausage' onChange={onChange} value={values.sausage}/>
        </label>
        <label>Jalapeños    
            <input type='checkbox' name='jalapeños' onChange={onChange} value={values.jalapeños}/>
        </label>
        <label>Spinach    
            <input type='checkbox' name='spinach' onChange={onChange} value={values.spinach}/>
        </label>
        <label>Olives     
            <input type='checkbox' name='olives' onChange={onChange} value={values.olives}/>
        </label>
        <label>Bacon    
            <input type='checkbox' name='bacon' onChange={onChange} value={values.bacon}/>
        </label>
        </div>
        <label>Special Instructions
          <input 
          name='instructions'
          type='text' 
          placeholder='Instructions Here'
          value={values.instructions}
          onChange={onChange}
          id='special-text'
          />
        </label>
        <input 
        type='submit' 
        value='Order Pizza' 
        disabled={disabled}
        onClick={confirmation}
        id='pizza-form'
        />
      </form>
      </div>
    
    </div> 
  )
}

export default Form;