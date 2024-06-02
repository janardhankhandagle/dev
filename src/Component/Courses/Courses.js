import React from 'react';
import './Courses.scss';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { SiGooglemeet } from "react-icons/si";
import { Link } from 'react-router-dom';

// Image imports
import java from './Images/java.jpg';
import full from './Images/full.jpg';
import backend from './Images/backend.jpg';
import front from './Images/front.png';
import dev from './Images/dev.jpg';
import cloud from './Images/cloud.jpg';
import ui from './Images/ui.jpg';
import software from './Images/software.jpg';
import mern from './Images/mern.jpg';
import mean from './Images/mean.jpg';
import Dsa from './Images/Dsa.png';
import search from './Images/search.png';

// Course data
const courses = [
  { title: 'Full Stack', img: full },
  { title: 'Mean Stack', img: mean },
  { title: 'Mern Stack', img: mern },
  { title: 'Java Developer', img: java },
  { title: 'Backend Developer', img: backend },
  { title: 'FrontEnd Developer', img: front },
  { title: 'Data Structure', img: Dsa },
  { title: 'Software Developer', img: software },
  { title: 'UI/UX Developer', img: ui },
  { title: 'Cloud', img: cloud },
  { title: 'Devops', img: dev },
  { title: 'Search Interview', img: search, text: 'Suggest your Interview' },
];

const Courses = () => {
  return (
    <div className="container text-center course-container pt-4">
      <h2 className='text-center course-head'>Mock Interviews for <br />multiple Different Job Titles</h2>
      <div className="row pt-4">
        {courses.map((course, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 text-center course-data mb-4">
            <Card className='course-style'>
              <Card.Img className='course-img' variant="top" src={course.img} />
              <Card.Body className='course-body'>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.text || 'hello'}</Card.Text>
                <Button className='course-btn'>
                  <Link className='Link-btn' to='/Package'>Lets' Join <SiGooglemeet /></Link>
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
