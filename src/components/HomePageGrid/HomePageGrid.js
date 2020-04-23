import React, { Component } from "react";
import "./HomePageGrid.css";
import image1 from "./../../images/nike-just-do-it-1.jpg";
import image2 from "./../../images/nike-just-do-it-2.jpg";
import image3 from "./../../images/nike-just-do-it-3.jpg";
import image4 from "./../../images/image4.jpg";
import image5 from "./../../images/nike-just-do-it-5.jpg";
import image6 from "./../../images/nike-just-do-it-6.jpg";
import image7 from "./../../images/nike-just-do-it-7.jpg";
import image8 from "./../../images/nike-just-do-it-8.jpg";
import image9 from "./../../images/nike-just-do-it-9.jpg";

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
                <button className="primary__button">
                  Watch<i className="g72-play paly-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-wrap">
          <div className="section-headline">
            <h2 className="headline-3">Don’t Miss</h2>
          </div>
          <div className="grid-row">
            <div className="grid-item">
              <div className="image-two__div">
                <img
                  className="image-two"
                  src={image5}
                  alt="nike-just-do-it-5.jpg"
                />
              </div>
              <div className="card-overlay-2">
                <p className="primary__sub-title-h3">
                  Nike Infinalon: A New Fabric Just for Yoga
                </p>
                <button className="primary__button">Shop</button>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-three__div">
                <img
                  className="image-three"
                  src={image6}
                  alt="nike-just-do-it-6.jpg"
                />
              </div>
              <div className="card-overlay-3">
                <p className="secondary__sub-title-h3">
                  Nike Air Zoom SuperRep Go
                </p>
                <button className="secondary__button">Shop</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-wrap">
          <div className="section-headline">
            <h2 className="headline-3">More Nike</h2>
          </div>
          <div className="grid-row">
            <div className="grid-item">
              <div className="image-two__div">
                <img
                  className="image-two"
                  src={image7}
                  alt="nike-just-do-it-7.jpg"
                />
              </div>
              <div className="card-overlay-7">
                <button className="primary__button">Men's</button>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-three__div">
                <img
                  className="image-three"
                  src={image8}
                  alt="nike-just-do-it-6.jpg"
                />
              </div>
              <div className="card-overlay-8">
                <button className="primary__button">Women's</button>
              </div>
            </div>
            <div className="grid-item">
              <div className="image-three__div">
                <img
                  className="image-three"
                  src={image9}
                  alt="nike-just-do-it-9.jpg"
                />
              </div>
              <div className="card-overlay-9">
                <button className="primary__button">Kid's</button>
              </div>
            </div>
          </div>
        </div>

        <div className="merch-menu">
          <div className="merch-menu-grid-row">
            <div className="merch-menu__column">
              <h3 className="merch-menu__h3">Shoes</h3>
              <ul>
                <li>Sneakers and Shoes</li>
                <li>Football boots</li>
                <li>Running Shoes</li>
                <li>Netball Sneakers</li>
              </ul>
            </div>


            <div className="merch-menu__column">
              <h3 className="merch-menu__h3">Clothing</h3>
              <ul>
                <li>All Clothing</li>
                <li>Tops</li>
                <li>Hoodies</li>
                <li>Jackets</li>
              </ul>
            </div>


            <div className="merch-menu__column">
              <h3 className="merch-menu__h3">Kid's</h3>
              <ul>
                <li>Kids' Sneakers</li>
                <li>Kids' Backpacks</li>
                <li>Kids' Football Boots</li>
                <li>Kids' Running Shoes</li>
              </ul>
            </div>


            <div className="merch-menu__column">
              <h3 className="merch-menu__h3">Featured</h3>
              <ul>
                <li>New Releases</li>
                <li>Backpacks and Bags</li>
                <li>Footballs</li>
                <li>Goalkeeper Gloves</li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    );
  }
}
