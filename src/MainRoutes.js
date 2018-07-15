import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import {ImgViewer,Products} from './components';

class MainRoutes extends Component {
    render() {
        return (
            <div>
                <Switch>
<<<<<<< HEAD
                    <Route exact path='/' />
                     
                   
=======
                    <Route exact path='/' component={ImgViewer}/>
                    <Route path='/shirts' component={Products}/>
                    <Route path='/Jeans' component={Products}/> 
<<<<<<< HEAD
>>>>>>> parent of 5d30b17... Sign-Up page added
=======
>>>>>>> parent of 5d30b17... Sign-Up page added
                </Switch>
            </div>
        );
    }
}

export default MainRoutes;