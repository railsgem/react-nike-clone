import React, { Component } from 'react'
import './NavMenu.css';

export default class NavMenu extends Component {
    render() {
        return (
            <div className='nav-menu__wrap'>
                <div className='nav-menu-brand'><i className='g72-swoosh'></i></div>
                <div className='nav-menu'>
                    <ul className='nav-ul'>
                        <li className='nav-item'>New Releases</li>
                        <li className='nav-item'>Men</li>
                        <li className='nav-item'>Women</li>
                        <li className='nav-item'>Kids</li>
                        <li className='nav-item'>Customise</li>
                        <li className='nav-item'>Collections</li>
                        <li className='nav-item'>Sale</li>
                    </ul>
                </div>
                <div className='search-container'>
                    <input className='search-input' placeholder='Search'></input>
                    <div className='search-icon__warp'><i className='g72-search search-icon'></i></div>
                    
                </div>
            </div>
        )
    }
}
