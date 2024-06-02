import React, { useEffect, useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

export default function Login() {
  const data = { email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag) {
      console.log("Registered");
    }
  }, [flag]);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.email || !inputData.password) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
      alert("hello")
    }
  };

  return (
    <>
       <body>
    <section class="container login-container ">
      <header className='login-header'>Login  Form</header>
      <form action="#" class="login-form">
        <div class="input-box">
          <label>Full Name</label>
          <input type="text" className='input-text' placeholder="Enter full name" required />
        </div>
        <div class="input-box">
          <label>Email Address</label>
          <input type="text" className='input-text' placeholder="Enter email address" required />
        </div>
        <span>  <Link className='forgot-pass' to='/Forgot'> Forgot Password ?</Link></span>
        <button className='login-btn'><Link className='log-btn' to='/Package'>Submit</Link></button>
        <span>Don't have an account ? <span><Link className='reg-btn' to='/Register'>Register</Link></span></span>
      </form>
    </section>
  </body>
    </>
  );
}
