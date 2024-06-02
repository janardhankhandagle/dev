import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Modal, Col, ModalBody, Row, ModalHeader } from 'reactstrap';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import './Scheduler.css' 
const Scheduler = () => {  
  const [openModel, setOpenModel] = useState(false); 
  return (
    <>
      <Modal value="sm" lg={12}
        isOpen={openModel}
        toggle={() => setOpenModel(!openModel)}>
        <ModalHeader toggle={() => setOpenModel(!openModel)}>

          <h3 className='text-center '>Schedule Interview</h3>
        </ModalHeader>
        <ModalBody>
          <form>
            <Row>
              <Col lg={12}>
                <div >
                  <label    htmlFor="name" >
                    Select Course :
                  </label>
                  <select className='schedular-select' type='drop-down' name='drop-down'>
                    <option value="">Select</option>
                    <option value="software_engineer">Software Engineer</option>
                    <option value="data_scientist">Data Scientist</option>
                    <option value="product_manager">Product Manager</option>
                    <option value="designer">Designer</option>
                  </select>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label  htmlFor="date">Date</label>
                  <input className='schedular-select' type="date" id="adr" name="address" placeholder="10/10/2012" />
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor="time">Time</label>
                  <input className='schedular-select' type="time" id="adr" name="address" placeholder="10/10/2012" />

                </div>
              </Col>
            </Row>

          </form>
          <div className='text-center pt-4'>
            <Button className='  text-center' variant="contained"> update Schedule</Button>
          </div>

        </ModalBody>

      </Modal>
      <Card variant="outlined" className="container text-center schechedular-container ">
        
        <h2 className='pb-2'>Your Interview Schedular
          <Button  className="schedular-heading" variant="outlined"
           onClick={() => { setOpenModel(true) }}> <Icon
           baseClassName="fas"
           className="fa-plus-circle schedular-inter"
           sx={{ color: 'green'[500] }}
         />  Schedule interview </Button>
        </h2>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr:No</th>
      <th scope="col">Course</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Frontend Developer</td>
      <td>10/10/2020</td>
      <td>12:00 am</td>
      <td  >
        
      <Button variant="outlined" >cancel</Button>
      <Button variant="outlined"   onClick={() => { setOpenModel(true) }}>update</Button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Frontend Developer</td>
      <td>10/10/2020</td>
      <td>12:00 am</td>
      <td>
        <Button variant="outlined" >cancel</Button>
      <Button variant="outlined"  onClick={() => { setOpenModel(true) }}>update</Button>
      </td>
    </tr>
   </tbody>
</table>

      </Card>
    </>
  )
}
export default Scheduler
