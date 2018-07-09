 import React from 'react';
 import {Grid,Row,Col,Jumbotron,Button,FormControl,DropdownButton,MenuItem,Panel} from 'react-bootstrap';
 import './Header.css';

 const Header = () => {
     return (
         <div className='main-container'>
            <div className='upper-container'>
                <h2 style={{color: 'white'}}>WESTERN<br />&nbsp;&nbsp;&nbsp;VIVID</h2>
                <Panel>
                <form>
                      
                    <FormControl type='text' size={100} placeholder='Search For Products'/>
                </form>
                </Panel>
                <Panel className='auth-buttons'>
                <div >
                    <Button bsSize='medium' bsStyle='success'>Sign In</Button>&nbsp;&nbsp;&nbsp;
                    <Button bsSize='medium' bsStyle='primary'>Sign Up</Button>
                </div>
                </Panel>
            </div>
            <div className='lower-container'>
                 
                <DropdownButton title='Show By Category'>
                    <MenuItem>Shirts</MenuItem>
                    <MenuItem>Jeans</MenuItem>
                    <MenuItem>T-Shirts</MenuItem>
                    <MenuItem>Kids wear</MenuItem>
                    <MenuItem>Sweatshirts</MenuItem>
                </DropdownButton>
                               {/* This will contain the searchbar,show by category,offers */}
                <DropdownButton title='Settings'>
                    <MenuItem>Change Password</MenuItem>
                    <MenuItem>Change User preferences</MenuItem>
                    
                </DropdownButton>
                
                
            </div>    
         </div>
     );
 };

 
 
 export {Header};