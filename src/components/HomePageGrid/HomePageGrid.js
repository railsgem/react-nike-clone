import React, { Component } from 'react';
import './HomePageGrid.css';
import image1 from './../../images/nike-just-do-it-1.jpg'

export default class HomePageGrid extends Component {
    render() {
        return (
            <div className='grid-wrap'>
                <div className='image-one__div'>
                    <img className='image-one' src={image1}  alt='nike-just-do-it-1.jpg'/>
                </div>
                <div className='card-overlay'>
                    <p className='sub-title'>Nike Air Max 2090</p>
                    <p className='title'>BOLD LOOK.</p>
                    <p className='title'>BOLD COLOURS.</p>
                    <p className='body'>The newest Air Max in the freshest colourways.</p>
                    <button className='primary__button'>Shop</button>
                </div>
            </div>
        )
    }
}
