
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forgot from './Component/LoginFolder/Forgot';
import Login from './Component/LoginFolder/Login';
import Navbar from './Component/Navbar/Navbar';
import Register from './Component/Registestration/Register';
import { Route,Routes } from 'react-router-dom';
import Package from './Component/Navbar/Package';
import Transaction from './Component/Payment/Transaction';
import Otp from './Component/LoginFolder/Otp';
import Scheduler from './Component/InterviewSchedular/Scheduler';
import Contact from './Component/Navbar/ContactUs/contact';
import Home from './Component/Navbar/HomeFolder/Home';
import Courses from './Component/Courses/Courses';
import Profile from './Component/Profile/Profile';

const App=()=> {
  return (
   <>
   <Navbar/>
  <Routes>
<Route path='/Home' element={<Home/>}> </Route>
    <Route path='/Login' element={<Login/>} />
    <Route path='/Forgot' element={<Forgot/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/Package' element={<Package/>} />
    <Route path='/Otp' element={<Otp/>} />
    <Route path='/Transaction'  element={ <Transaction/>} />
    <Route path='/scheduler' element={<Scheduler/>} />
    <Route path='/contact' element={<Contact/>} />  
    <Route path='/Courses' element={<Courses/>} />  
    <Route path='/Profile' element={<Profile/>} />
  </Routes>
  </>
  );
}

export default App;
