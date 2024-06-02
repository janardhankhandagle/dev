import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AddHomeIcon from '@mui/icons-material/AddHome';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LoginIcon from '@mui/icons-material/Login';
import List from '@mui/material/List';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import InfoIcon from '@mui/icons-material/Info';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ListItemText from '@mui/material/ListItemText';
import AccountMenu from './userdropdwon';
import './navbar.css'
export default function Navbar() {
  const [open, setOpen] = React.useState(false);
 

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250  }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <div  sx={{justifyContent: 'center', paddingTop: '10px'}} >
      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle text-center rounded mx-auto d-block" width="80"   /> 
      <p className='text-center'>Janardhan khandagle</p>
      <p className='text-center'><Link className='text-center nav-profile' to='/Profile'>View Profile</Link></p>
      </div>
             
      <Divider component="li" />
        {[     <Link className='nav-link' to='/Home'> Home</Link>,  <Link className='nav-link' to='/Home'>About</Link>,  
          <Link className='nav-link' to='/Package'>Packages</Link>, <Link className='nav-link' to='/contact'>Contact</Link> ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              {index % 4 === 0 ? < AddHomeIcon/> : index % 4 === 1 ? <InfoIcon /> : index % 4 === 2 ? <Inventory2Icon  /> : <AddIcCallIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
       
      </List>
      <Divider sx={{ width: 250  , paddingTop: '40px '}}  component="" />
      <List>
      
        {[ <Link className='nav-link'  to='/Login'>Login</Link>, <Link className='nav-link' to='/Register'>Register</Link>].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <LoginIcon/> : <LockOpenIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-blue ">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            
            <span className="navbar-toggler-icon"  style={{height:'20px'}}  onClick={toggleDrawer(true)}></span>
            
          </button>
          <a className="navbar-brand  " style={{marginLeft:'20px', fontSize:'30px'}}  > <Link className='nav-link' to='/Home'> Navbar </Link></a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03" >
          
            <  AccountMenu  />
        
          </div>
          <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
        </nav> 
      </div>
     
    </>
  )
}
