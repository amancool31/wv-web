import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from '../assets/banner-clothing-1.jpg';
import img2 from '../assets/banner-clothing-2.jpg';

class ImgViewer extends Component {
    render() {
        return (
            <div>
                <Carousel >
                    <Carousel.Item>
                         <center><img src={img1} /></center>
                         <Carousel.Caption>
                             <h2>NEW ARRIVALS!</h2>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                       <center> <img src={img2} /></center>
                       <Carousel.Caption>
                       <h2>SUMMER COLLECTION</h2>
                         </Carousel.Caption>
                    </Carousel.Item>
                     
                </Carousel>
            </div>
        );
    }
}

export {ImgViewer};