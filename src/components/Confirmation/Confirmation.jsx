import React from 'react'
import thankYou from './../../assets/illustration-thank-you.svg'
import './confirmation.css'

const Confirmation = ({value = 4}) => {
  return (
    <div className='confirmation_container'>
      <img src={thankYou} alt="thank-you" />
      <p className='confirmation_selected'>You selected {value} out of 5</p>
      <h2>Thank you</h2>
      <p className='confirmation_message'>
        We appreciate you taking the time to give a rating. 
        If you ever need more support, don't hesitate to get in touch!
      </p>
    </div>
  )
}

export { Confirmation }