import React from 'react'
import './contact.css'
import Button from '@mui/material/Button';

  const contact=()=> {
  return (
    <><section id="contact ">
  
    <h2 class="section-header">Contact Us</h2>
    
    <div class="contact-wrapper">
    
      <form id="contact-form" class="form-horizontal" >
         
        <div class="form-group">
          <div class="col-sm-12">
            <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required/>
          </div>
        </div>
  <br />
        <div class="form-group">
          <div class="col-sm-12">
            <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
          </div>
        </div>
        <br />
        <div class="form-group">
          <div class="col-sm-12">
            <input type="number" class="form-control" id="number" placeholder="PHONE" name="number" value="" required/>
          </div>
        </div>
        <br />
  
        <textarea class="form-control" rows="6" placeholder="MESSAGE" name="message" required></textarea>
        
        <Button  variant="outlined" class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
          <div class="alt-send-button">
            <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
          </div>
        
        </Button>
        
      </form>
      
   
      
        <div class="direct-contact-container">
  
          <ul class="contact-list">
            <li class="list-item"><i class="fa fa-map-marker fa-1x"><span class="contact-text place">City, State</span></i></li>
            
            <li class="list-item"><i class="fa fa-phone fa-1x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
            
            <li class="list-item"><i class="fa fa-envelope fa-1x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>
            
          </ul>
  
          <hr/>
          <ul class="social-media-list">
            <li>
                <a href="/" target="_blank" class="contact-icon">
              <i class="fa fa-github" aria-hidden="true">
                </i>
                </a>
            </li>
            <li><a href="/" target="_blank" class="contact-icon">
              <i class="fa fa-codepen" ></i></a>
            </li>
            <li><a href="/" target="_blank" class="contact-icon">
              <i class="fa fa-twitter" aria-hidden="true"></i></a>
            </li>
            <li><a href="/" target="_blank" class="contact-icon">
              <i class="fa fa-instagram" aria-hidden="true"></i></a>
            </li>       
          </ul>
          <hr/>
  
          <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
  
        </div>
      
    </div>
    
  </section>  
    
    </>
  )
}
export default contact
