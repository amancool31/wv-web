import React, { Component } from 'react';
import { Grid, Row, Col ,Button,Well} from 'react-bootstrap';
import './App.css';
import {Header,ImgViewer} from './components';

class App extends Component {
  render() {
    return (
      <div >
         <div>
           <Header /> 
        </div> 
        <div>
          <Well>
           <ImgViewer /> 
          </Well>  
        </div> 
      </div>
    );
  }
}

export default App;
