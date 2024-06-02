import React from 'react'
import './Otp.scss'
import { Link } from 'react-router-dom'
const Otp = () => {
  return (
    <>
 <body>
    <section class="container otp-container ">
      <header className='otp-header'>OTP Form</header>
      <form action="#" class="otp-form">
        <div class="input-box">
          <label>Enter OTP</label>
          <input type="number" className='input-text' placeholder="Enter Otp" required />
        </div>
        <button className='otp-btn'><Link className='otps-btn' to='/Package'>Conform OTP</Link></button>
      </form>
    </section>
  </body>

    </>





  )
}
export default Otp;
