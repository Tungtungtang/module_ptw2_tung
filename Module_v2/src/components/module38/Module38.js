import React from 'react';
import './sass/Module38.scss';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Module38() {
  return (
    <div className="type-38">
      <div className="container container-top">
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="shopping">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span > Shopping</span>
            </Link>
            <div className="title">
              <h3>JackRabbit - 3rd Ave
            </h3>
            </div>
          </div>
          <div className="col-md-6 price">
            <div> Price:</div>
            <div className="icon-dolar">
              <FontAwesomeIcon icon={faDollarSign} />
              <FontAwesomeIcon icon={faDollarSign} />
              <FontAwesomeIcon icon={faDollarSign} />
            </div>
          </div>
        </div>
      </div>
      <div class="listing-nav-inner menu-bot" >
          <div class="container container-bot">
            <div class="row">
                <ul>
                  <li><a href="#listing-home">Home</a></li>
                  <li><a href="#listing-description">Description</a></li>
                  <li><a href="#listing-features">Listing Features</a></li>
                  <li><a href="#listing-location">Location</a></li>
                  <li><a href="#listing-video">Video</a></li>
                  <li><a href="#listing-comment">Comment</a></li>
                </ul>
            </div>
          </div>
      </div>

    </div>
  );
}
export default Module38
