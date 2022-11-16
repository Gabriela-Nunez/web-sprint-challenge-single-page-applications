import React from "react";
import './Confirmation.css';


const Confirmation = () => {
  return (
    <div> 
      <h2>Your Order Was Received</h2>
      <p>check your email for details regarding ETA </p>
      <p>As always thank you for your business!!!</p>
      <img 
        className='confirmation-pic'
        src='./images/confirmationPic.jpg'
        alt='delivery man on a motorcycle'
      />
    </div>
  )
}

export default Confirmation;