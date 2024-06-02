import React from 'react'
import visapay from './Images/visapay.png'
import amazonpay from './Images/amazonpay.png'
import googlepay from './Images/googlepay.png'

import phonepay from './Images/phonpay.png'
import { Link } from 'react-router-dom'


import './Transaction.css'
const Transaction = () => {
  return (
    <>

      <div className="row">
        <div className="col-75">
          <div className=" container transaction-container">
            <form >
              <div className="row">
                <div className="col-50 pt-2">
                  <h3>Schedule Interview</h3>

                  <label for="position"><i className="fa fa-briefcase pt-5"></i> Select course</label>
                  <select id="position" name="position">
                    <option value="software_engineer">Software Engineer</option>
                    <option value="data_scientist">Data Scientist</option>
                    <option value="product_manager">Product Manager</option>
                    <option value="designer">Designer</option>
                    <option value="software_engineer">Software Engineer</option>
                    <option value="data_scientist">Data Scientist</option>
                    <option value="product_manager">Product Manager</option>
                    <option value="designer">Designer</option>
                  </select>

                  <label for="interview_type"><i className="fa fa-calendar"> </i> Select Time</label>
                  <select id="interview_type" name="interview_type">
                    <option value="phone">10:Am</option>
                    <option value="video">11:Am</option>
                    <option value="in_person">12:Pm</option>
                    <option value="in_person">01:Pm</option>
                    <option value="in_person">02:Pm</option>
                    <option value="in_person">03:Pm</option>
                    <option value="in_person">04:Pm</option>
                    <option value="in_person">05:Pm</option>
                    <option value="in_person">06:Pm</option>
                    <option value="in_person">07:Pm</option>
                    <option value="in_person">08:Pm</option>
                    <option value="in_person">09:Pm</option>
                    <option value="in_person">10:Pm</option>

                  </select>

                  <label for="date"><i className="fa fa-calendar"></i> Select date</label>
                  <input type="Date" id="container-date" name="address" placeholder="10/10/2012" />



                </div>

                <div class="col-50">
                  <h3 className='pt-2 text-center'>Payment</h3>

                  <label for="name"><i className='fa fa-user pt-2'> </i> Name on Card</label>
                  <input type="text"  name="cardname" placeholder="John More Doe" />
                  <label for="number"> <i className='fa fa-id-card' > </i> Credit card number</label>
                  <input type="number"name="cardnumber" placeholder="1111-2222-3333-4444" />
                  <label for="expmonth"> <i className='fa fa-spinner'> </i> Exp Month</label>
                  <input type="text" name="expmonth" placeholder="September" />

                  <div className="row">
                    <div className="col-50">
                      <label for="expyear"> <i className='fa fa-hourglass-end'></i> Exp Year</label>
                      <input type="number"  name="expyear" placeholder="2018" />
                    </div>
                    <div className="col-50">
                      <label for="cvv"> <i className="fa fa-user-secret" aria-hidden="true"></i>CVV</label>
                      <input type="number" id="cvv" name="cvv" placeholder="352" />
                    </div>
                  </div>
                  <label for="fname">Accepted Cards</label>
                  <div className="icon-container text-center ">
                    <i className='visa-pay'><img className='payment ' src={visapay} alt="" /></i>
                    <i className='phone-pay'><img className='payment ' src={phonepay} alt="" /></i>
                    <i className='google-pay ' ><img className='payment pl-2' src={googlepay} alt="" /></i>
                    <i className='amazon-pay'><img className='payment ' src={amazonpay} alt="" /></i>
                  </div>
                </div>
              </div>

              <button className="btnn text-center " value='continue to checkout' type="submit"> <Link to='/scheduler' id='transaction-btn'> Continue to checkout </Link> </button>

            </form>
          </div>
        </div>
      </div>

    </>
  )
}
export default Transaction;