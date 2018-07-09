 import React from 'react';
 import {Grid,Row,Col,Jumbotron,Button,FormControl,DropdownButton,MenuItem,Well,Panel} from 'react-bootstrap';
 import './Header.css';

 const Header = () => {
     return (
         <div className='main-container'>
            <div className='upper-container'>
                 
                <h2 style={{color: 'black'}} className='logo'>WESTERN<br />&nbsp;&nbsp;&nbsp;VIVID</h2>
                 
                <Well>
                <form className='search-bar'>
                      
                    <FormControl type='text' size={100} placeholder='Search For Products'/>
                    <Button>🔍</Button>
                </form>
                </Well>
                <Panel className='auth-buttons'>
                    <div >
                        <Button bsSize='medium' bsStyle='success'>Sign In</Button>&nbsp;&nbsp;&nbsp;
                        <Button bsSize='medium' bsStyle='primary'>Sign Up</Button>
                    </div>
                </Panel>
            </div>
            
                <div className='lower-container '>
                    
                    
                        
                       <DropdownButton title='Show By category' bsStyle='success'>
                        <MenuItem>Shirts</MenuItem>
                        <MenuItem>Jeans</MenuItem>
                        <MenuItem>T-Shirts</MenuItem>
                        <MenuItem>Kids wear</MenuItem>
                        <MenuItem>Sweatshirts</MenuItem>
                    </DropdownButton>
                    
                                {/* This will contain the searchbar,show by category,offers */}
                    <DropdownButton title='Settings'bsStyle='success'>
                        <MenuItem>Change Password</MenuItem>
                        <MenuItem>Change User preferences</MenuItem>
                        
                    </DropdownButton>
                    <DropdownButton title='XYZfjs' bsStyle='success'>
                        <MenuItem>Change Password</MenuItem>
                        <MenuItem>Change User preferences</MenuItem>
                        
                    </DropdownButton>
                    
                    
                </div> 
               
         </div>
     );
 };

 
 
 export {Header};