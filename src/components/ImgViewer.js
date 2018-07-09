import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from '../assets/banner-clothing-1.jpg';
import img2 from '../assets/banner-clothing-2.jpg';
import './ImgViewer.css';

class ImgViewer extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                         <center><img src={img1} /></center>
                         <Carousel.Caption>
                             <h2 style={{fontWeight: 700}}>NEW ARRIVALS!</h2><br/>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                       <center> <img src={img2} /></center>
                       <Carousel.Caption>
                            <h2 style={{fontWeight: 700}}>SUMMER COLLECTION</h2><br />
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                     
                </Carousel>
            </div>
        );
    }
}

export {ImgViewer};