import React, { Component } from 'react';
import { Grid, Row, Col ,Button} from 'react-bootstrap';
import './App.css';
import {Header,ImgViewer} from './components';

class App extends Component {
  render() {
    return (
      <div >
         <div>
           <Header /> 
        </div><br />
        <div>
           <ImgViewer /> 
        </div>
      </div>
    );
  }
}

export default App;
