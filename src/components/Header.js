 import React from 'react';
 import {Grid,Row,Col,Jumbotron,Button,FormControl,DropdownButton,MenuItem,Well,Panel} from 'react-bootstrap';
 import './Header.css';
 import {Link,Route} from 'react-router-dom'; 
  

 const Header = () => {
     return (
         <div className='main-container'>
            <div className='upper-container '>
                 
               <Link style={{textDecoration:'none'}} to='/'> <h2 style={{color: 'black'}} className='logo'> WESTERN<br />&nbsp;&nbsp;&nbsp;VIVID</h2></Link>
                 
                <Well>
                <form className='search-bar'>
                      
                    <FormControl type='text' size={70} placeholder='Search For Products'/>
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
                    
                    
                        
                       <DropdownButton title='Categories' bsStyle='success'>
                          <MenuItem style={{flex:1}} ><center><Link style={{textDecoration:'none'}} to='/shirts' >Shirts </Link></center> </MenuItem>  
                          <MenuItem> <center><Link style={{textDecoration:'none'}} to='/Jeans'>Jeans </Link></center> </MenuItem>   
                        <MenuItem> <center>T-Shirts </center></MenuItem>
                        <MenuItem>  <center>Kids wear </center> </MenuItem>
                        <MenuItem> <center>SweatShirts</center></MenuItem>
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