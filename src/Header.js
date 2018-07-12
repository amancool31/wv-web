import React, {Component} from 'react';
import {Jumbotron,DropdownButton,MenuItem} from 'react-bootstrap';
import './Header.css';
import Signup from "./authentification/Signup"
import {Link,Route} from 'react-router-dom'; 
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      toggleModal() {
       this.setState({
         isModalOpen: !this.state.isModalOpen
       });
     }
     handleLogin(event) {
       this.toggleModal();
       alert("Username: " + this.username.value + " Password: " + this.password.value
           + " Remember: " + this.remember.checked);
       event.preventDefault();

   }
     

    render() {
        return(
       <React.Fragment>
       <Navbar color="dark" dark expand="md">
       <NavbarBrand href="/">Western Vivid</NavbarBrand>
               <NavbarToggler onClick={this.toggleNav} />
             {/*  <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />Western Vivid</NavbarBrand>*/}
               <Collapse isOpen={this.state.isNavOpen} navbar>
            
                           <Nav className="ml-auto" navbar>
                               <NavItem>
                                   <Button className="danger" onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                               </NavItem>
                               <NavItem>
                                   <Button className="danger" ><span className="fa fa-sign-in fa-lg"></span><Link to="/Signup">Signup</Link></Button>
                               </NavItem>
                           </Nav>
                      
               </Collapse>
       
       </Navbar>
   

        <div className='main-container'>
        {/* <div className='upper-container '>
                
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
    */}
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

<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                   <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                   <ModalBody>
                   <Form onSubmit={this.handleLogin}>
                           <FormGroup>
                               <Label htmlFor="username">Username</Label>
                               <Input type="text" id="username" name="username"
                                   innerRef={(input) => this.username = input} />
                           </FormGroup>
                           <FormGroup>
                               <Label htmlFor="password">Password</Label>
                               <Input type="password" id="password" name="password"
                                   innerRef={(input) => this.password = input}  />
                           </FormGroup>
                           <FormGroup check>
                               <Label check>
                                   <Input type="checkbox" name="remember"
                                   innerRef={(input) => this.remember = input}  />
                                  <text>Remember me</text>
                               </Label>
                           </FormGroup>
                           <Button type="submit" value="submit" color="primary">Login</Button>
                       </Form>
                       <text>New User?<a href="/">Click Here</a></text>
                   </ModalBody>
               </Modal>
                   
              
               </React.Fragment>
    );
};

}

export default Header;