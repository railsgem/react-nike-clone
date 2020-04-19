import React, { Component } from 'react'
import './BannerMessage.css';

export default class BannerMessage extends Component {
    render() {
        return (
            <div className='banner-warp'>
                <div className='banner-message'>
                    <span className='message'>COVID-19: Information about Nike stores and deliveries. <a className='message__a' href="#">View here.</a></span>
                </div>
            </div>
        )
    }
}
