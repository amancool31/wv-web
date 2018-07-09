 import React from 'react';
 import {Grid,Row,Col,Jumbotron,Button,ButtonToolbar,FormControl,DropdownButton,MenuItem} from 'react-bootstrap';
 import './Header.css';

 const Header = () => {
     return (
         <div className='main-container'>
            <div className='upper-container'>
                <h2 style={{color: 'white'}}>WESTERN<br />&nbsp;&nbsp;&nbsp;VIVID</h2>
                <form className='lower-container'>
                    <p style={{fontWeight: 500,color: 'white'}}>Search&nbsp;</p>
                    <FormControl type='text' size={100}/>
                </form>
                <div>
                    <Button bsSize='large' bsStyle='success'>Sign In</Button>
                    <Button bsSize='large' bsStyle='primary'>Sign Up</Button>
                </div>
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