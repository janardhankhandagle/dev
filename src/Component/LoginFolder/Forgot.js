import React from 'react'
import './Forgot.scss'

import { Link } from 'react-router-dom'

export default function Forgot() {
  return (
    <>
    <body>
    <section class="container forgot-container ">
      <header className='forgot-header'>Forgot Password </header>
      <form action="#" class="forgot-form">
        <div class="input-box">
          <label>Enter OTP</label>
          <input type="number" className='input-text' placeholder="Enter Otp" required />
        </div>
        <button className='forgot-btn'><Link  className='for-btn' to='/Login'>Submit</Link></button>
      </form>
    </section>
  </body>
    </>
  )
}
