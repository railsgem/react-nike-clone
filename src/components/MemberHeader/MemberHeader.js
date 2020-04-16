import React, { Component } from "react";
import "./MemberHeader.css";

export default class MemberHeader extends Component {
  render() {
    return (
      <div className="member-header__wrap">
        <div className="member-header__left">
          <div className="header__nav_item">Join Us</div>
          <div className="header__nav_item">
            <i class="g72-jordan jordan-icon"></i>
          </div>
        </div>
        <div className="member-header__right">
          <div>Join/Log In To Nike Member Profile</div>
          <div>Help</div>
          <div>
            <i class="g72-cart cart-icon"></i>
          </div>
          <div>
            <a className="map-icon">
            <svg height="15px" width="18px" fill="#111" viewBox="0 0 42 58">
              <path d="M21 0C9.4 0 0 9.5 0 21.2 0 39.9 21 58 21 58s21-18.1 21-36.8C42 9.5 32.6 0 21 0zm0 31c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"></path>
            </svg>{" "}
            <label>Australia</label></a>
          </div>
        </div>
      </div>
    );
  }
}
