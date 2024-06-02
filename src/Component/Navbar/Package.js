import React from 'react'
import Button from '@mui/material/Button';
import './Package.scss'
export default function Package() {
  return (
    <>
      <body>
  <div class="container package-container">
    <div class="column package-column">
      <div class="pricing-card basic">
        <div class="pricing-header">
          <span class="plan-title">Basic</span>
          <div class="price-circle">
            <span class="price-title">
              <small>RS</small><span>00.00</span>
            </span>
           
          </div>
        </div>
        <div class="badge-box">
        
        </div>
        <ul>
          <li>
            <strong>1</strong> Domain
          </li>
          <li>
            <strong>10 GB</strong> Disk Space
          </li>
          <li>
            <strong>50 GB</strong> Bandwith
          </li>
          <li>
            <strong>1 Free</strong> Domain
          </li>
          <li>
            <strong>1 FTP</strong> Account
          </li>
        </ul>
        <div class="buy-button-box">
          <Button variant='contained' href="/" class="buy-now">Select Plan</Button>
        </div>        
      </div>
    </div>
    <div class="column package-column">
      <div class="pricing-card echo">
        <div class="pricing-header">
          <span class="plan-title">Advanced</span>
          <div class="price-circle">
            <span class="price-title">
              <small>RS</small><span>00.00</span>
            </span>
          
          </div>
        </div>
        <div class="badge-box">
     
        </div>
        <ul>
          <li>
            <strong>5</strong> Domains
          </li>
          <li>
            <strong>50 GB</strong> Disk Space
          </li>
          <li>
            <strong>250 GB</strong> Bandwith
          </li>
          <li>
            <strong>2 Free</strong> Domains
          </li>
          <li>
            <strong>Unlimited FTP</strong> Account
          </li>
        </ul>
        <div class="buy-button-box">
        <Button variant='contained' href="/" class="buy-now">Select Plan</Button>
        </div>
      </div>
    </div>
    <div class="column package-column">
      <div class="pricing-card pro">
        <div class="popular">pro</div>
        <div class="pricing-header">
          <span class="plan-title">College</span>
          <div class="price-circle">
            <span class="price-title">
              <small>RS</small><span>00.00</span>
            </span>
          
          </div>
        </div>
        <div class="badge-box">
         
        </div>
        <ul>
          <li>
            <strong>10</strong> Domains
          </li>
          <li>
            <strong>100 GB</strong> Disk Space
          </li>
          <li>
            <strong>Unlimited</strong> Bandwith
          </li>
          <li>
            <strong>3 Free</strong> Domains
          </li>
          <li>
            <strong>Unlimited FTP</strong> Account
          </li>
        </ul>
        <div class="buy-button-box">
        <Button variant='contained' href="/" class="buy-now">Select Plan</Button>
        </div>
      </div>
    </div>
    <div class="column package-column">
      <div class="pricing-card business">
        <div class="pricing-header">
          <span class="plan-title">Company</span>
          <div class="price-circle">
            <span class="price-title">
              <small>Rs</small><span>00</span>
            </span>
           
          </div>
        </div>
        <div class="badge-box">
         
        </div>
        <ul>
          <li>
            <strong>Unlimited</strong> Domain
          </li>
          <li>
            <strong>250 GB</strong> Disk Space
          </li>
          <li>
            <strong>Unlimited</strong> Bandwith
          </li>
          <li>
            <strong>5 Free</strong> Domains
          </li>
          <li>
            <strong>Unlimited FTP</strong> Account
          </li>
        </ul>
        <div class="buy-button-box">
        <Button variant='contained' href="/" class="buy-now">Select Plan</Button>
        </div>
      </div>
    </div>
  </div>
</body>

    </>
  )
}
