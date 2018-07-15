import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import {ImgViewer,Products} from './components';
import Signup from './authentification/Signup';

class MainRoutes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' />
                     
                   
                </Switch>
            </div>
        );
    }
}

export default MainRoutes;