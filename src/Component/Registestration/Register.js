
import './Register.scss';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <>
     <body>
    <section class="container register-container ">
      <header>Registration Form</header>
      <form action="#" class="register-form">
        <div class="input-box">
          <label>Full Name</label>
          <input type="text" className='input-text' placeholder="Enter full name" required />
        </div>
        <div class="input-box">
          <label>Email Address</label>
          <input type="text" className='input-text' placeholder="Enter email address" required />
        </div>
        <div class="column">
          <div class="input-box">
            <label>Phone Number</label>
            <input type="number" className='input-text' placeholder="Enter phone number" required />
          </div>
          <div class="input-box">
            <label>Enter Your Location</label>
            <input type="text" className='input-text' placeholder="Enter Your City" required />
          </div>
        </div>
        
        <div class="input-box address">
          <div class="column">
            <div class="select-box">
              <select>
                <option hidden>Experience</option>
                <option>Fresher</option>
                <option>1-2</option>
                <option>2-3</option>
                <option>4-5</option>
                <option>5+ years</option>
              </select>
            </div>
          
            <input type="number" className='input-text' placeholder="Passing Year" required />
          </div>
         
        </div>
        <button className='register-btn'> <Link  className='reg-btn' to='/Otp'>Register</Link></button>
        <span>Already have an account ? <span><Link className='log-btn' to='/Login'>Login Here</Link></span></span>
      </form>
    </section>
  </body>

    </>
  )
}
export default Register