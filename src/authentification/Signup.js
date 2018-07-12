import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
            Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Signup extends Component {
  

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            telnum: '',
            email: '',
            agree: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return(
        <div className="row row-content">
        <div className="col-12">
           <h3>SignUp Form</h3>
        </div>
         <div className="col-12 col-md-9">
             <Form onSubmit={this.handleSubmit}>
                 <FormGroup row>
                     <Label htmlFor="firstname" md={2}>Name</Label>
                     <Col md={10}>
                         <Input type="text" id="firstname" name="firstname"
                             placeholder="Name"
                             value={this.state.firstname}
                             onChange={this.handleInputChange} />
                     </Col>
                 </FormGroup>
                 <FormGroup row>
                 <Label htmlFor="telnum" md={2}>Contact Number</Label>
                     <Col md={10}>
                         <Input type="tel" id="telnum" name="telnum"
                             placeholder="Number"
                             value={this.state.telnum}
                             onChange={this.handleInputChange} />
                     </Col>
                 </FormGroup>
                 <FormGroup row>
                     <Label htmlFor="email" md={2}>Email</Label>
                     <Col md={10}>
                         <Input type="email" id="email" name="email"
                             placeholder="Email"
                             value={this.state.email}
                             onChange={this.handleInputChange} />
                     </Col>
                 </FormGroup>
                 <FormGroup row>
                     <Col md={{size: 6, offset: 2}}>
                         <FormGroup check>
                             <Label check>
                                 <Input type="checkbox"
                                     name="agree"
                                     checked={this.state.agree}
                                     onChange={this.handleInputChange} /> {' '}
                                 <strong>May we contact you?</strong>
                             </Label>
                         </FormGroup>
                     </Col>
                 </FormGroup>
                
                 <FormGroup row>
                     <Col md={{size: 10, offset: 2}}>
                         <Button type="submit" color="primary">
                             SignUp
                         </Button>
                     </Col>
                 </FormGroup>
             </Form>
         </div>
    </div>
        );
};
}

export default Signup;