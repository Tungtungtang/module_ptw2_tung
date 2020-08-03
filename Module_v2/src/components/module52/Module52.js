import React from 'react';
import './sass/Module52.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostImage from "./images/listing-20.png";
function Module52() {
  return (
    <div className="type-52">
      <div className="container">
        <h3 className="title-module">
          Recent Post
        </h3>
        <div className="row row-module">
          <div className="col-md-12">
            <ul>
              <li className="nl-view-list-item row">
                <div className="nl-post-image">
                  <img src={PostImage} alt="post" />
                </div>
                <div className="post-content">
                  <div className="nl-title">
                    <a href="#">Server-Side Rendering</a>
                  </div>
                  <div className="nl-post-date">
                    <a href="#">Sport</a>
                    <span>21 Dec 16</span>
                  </div>
                </div>
              </li>
              <li className="nl-view-list-item row">
                <div className="nl-post-image">
                  <img src={PostImage} alt="post" />
                </div>
                <div className="post-content">
                  <div className="nl-title">
                    <a href="#">Latest Fashion Trends 2016</a>
                  </div>
                  <div className="nl-post-date">
                    <a href="#">Sport</a>
                    <span>21 Dec 16</span>
                  </div>
                </div>
              </li>
              <li className="nl-view-list-item row">
                <div className="nl-post-image">
                  <img src={PostImage} alt="post" />
                </div>
                <div className="post-content">
                  <div className="nl-title">
                    <a href="#">Coffeeshops continue to conquer</a>
                  </div>
                  <div className="nl-post-date">
                    <a href="#">Sport</a>
                    <span>21 Dec 16</span>
                  </div>
                </div>
              </li>
              <li className="nl-view-list-item row">
                <div className="nl-post-image">
                  <img src={PostImage} alt="post" />
                </div>
                <div className="post-content">
                  <div className="nl-title">
                    <a href="#">How the future could resemble</a>
                  </div>
                  <div className="nl-post-date">
                    <a href="#">Sport</a>
                    <span>21 Dec 16</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Module52
