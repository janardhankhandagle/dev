import React from 'react';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import './Profile.css'

const Profile = () => {
  return (
    <Container className="  main-body mt-4">
      <Row className="gutters-sm text-">

        <Col md={3} className="mb-3">
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Button className='edit-btn'>Edit</Button>
            <Card.Body className="text-center">

              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="160" />
              <div className="mt-3">
                <h4>janardhan Bhaskar Khandagle</h4>
                <p className="text-secondary mb-1">MERN Stack Developer</p>
              </div>
            </Card.Body>
            <Card.Body>
              <Row>
              <Col className='text-center ' sm={12}>
                  <div>
                    <h6 className="d-inline">Email: </h6>
                    <h6 className="d-inline">xyz@gmail.com</h6>
                  </div>
                </Col>
                <Col className='text-center mb-1' sm={12}>
                  <div>
                    <h6 className="d-inline">Mobile: </h6>
                    <h6 className="d-inline">9370517210</h6>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="gutters-sm">
        <Col md={2} className="mb-3">
        </Col>
        <Col sm={8} className="mb-3">
          <Card className="h-90">
            <Card.Body>
              <h6 className="d-flex  mb-3 text-center">Interview Status</h6>
              <small>Web Design</small>
              <ProgressBar now={80} className="mb-3 progresss-bar" />
              <small>Full Stack </small>
              <ProgressBar now={72} className="mb-3 progresss-bar" />
              <small>Java</small>
              <ProgressBar now={89} className="mb-3 progresss-bar" />
              <small>Cloud </small>
              <ProgressBar now={40} className="mb-3 progresss-bar" />
              <small>Backend </small>
              <ProgressBar now={30} className="mb-3 progresss-bar" />
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
};

export default Profile;
