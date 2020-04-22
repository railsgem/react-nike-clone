import React, { Component } from "react";
import "./HomePageGrid.css";
import image1 from "./../../images/nike-just-do-it-1.jpg";
import image2 from "./../../images/nike-just-do-it-2.jpg";
import image3 from "./../../images/nike-just-do-it-3.jpg";
import image4 from "./../../images/image4.jpg";

export default class HomePageGrid extends Component {
  render() {
    return (
      <div>
        <div className="grid-wrap">
          <div className="image-one__div">
            <img
              className="image-one"
              src={image1}
              alt="nike-just-do-it-1.jpg"
            />
          </div>
          <div className="card-overlay">
            <p className="sub-title">Nike Air Max 2090</p>
            <p className="title">BOLD LOOK.</p>
            <p className="title">BOLD COLOURS.</p>
            <p className="body">
              The newest Air Max in the freshest colourways.
            </p>
            <button className="primary__button">Shop</button>
          </div>
        </div>
        <div className="grid-wrap">
          <div className="section-headline">
            <h2 className="headline-3">Trending</h2>
          </div>
          <div className="grid-row">
            <div className="grid-item">
              <div className="image-two__div">
                <img
                  className="image-two"
                  src={image2}
                  alt="nike-just-do-it-2.jpg"
                />
              </div>
              <div className="card-overlay-2">
                <p className="sub-title">Just In: KD13</p>
                <button className="primary__button">Shop</button>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-three__div">
                <img
                  className="image-three"
                  src={image3}
                  alt="nike-just-do-it-3.jpg"
                />
              </div>
              <div className="card-overlay-3">
                <p className="sub-title">Just In: Essentials</p>
                <button className="primary__button">Shop</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-wrap grid-warp-4">
          <div className="grid-image4">
            <img className="image4" src={image4} />
          </div>

          <div className="card-overlay-4">
            <div className="card-overlay-content">
              <div className="title">
                <h3 className="card-h3">PLAY IT SAFE, PLAY FOR THE WORLD</h3>
              </div>
              <div className="body">
                <p className="card-p">
                  It's when the game stops that we realise we are all one team.
                  And right now, teamwork is more important than ever. To help
                  support athletes around the world, we're offering inspiration
                  and information to help everyone stay active, positive and
                  healthy—together.
                </p>
              </div>
              <div className="button-wrap">
                <button className="secondary__button">Learn More</button>
                <button className="primary__button">Watch<i className="g72-play paly-icon"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
