import React, { Component } from 'react';
import { Grid, Row, Col ,Button,Well} from 'react-bootstrap';
import './App.css';
import {Header,ImgViewer,Products} from './components';
import {BrowserRouter,Route} from 'react-router-dom';
import MainRoutes from'./MainRoutes';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div >
         <div>
           <Header /> 
        </div> 
        <MainRoutes />
         
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
