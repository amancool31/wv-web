import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from '../assets/banner-clothing-1.jpg';
import img2 from '../assets/banner-clothing-2.jpg';

class ImgViewer extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                         <center><img src={img1} /></center>
                    </Carousel.Item>
                    <Carousel.Item>
                       <center> <img src={img2} /></center>
                    </Carousel.Item>
                     
                </Carousel>
            </div>
        );
    }
}

export {ImgViewer};