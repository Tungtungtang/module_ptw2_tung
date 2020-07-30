import React from 'react';
import './sass/Module17.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostImage from "./images/listing-20.png";
function Module17() {
  return (
    <div className="type-17">
      <div className="container container-module38">
        <div className="row">
          <div className="col-md-6 item-left">
              <div className="nl-col-ctn">
                <div className="nl-item-image-left">
                  <img className="img-fluid" src={PostImage} alt="Most Visited Places" />
                  <span className="nl-contents-left">
                    <h4> Food & drink</h4>
                    <p> Enjoy the best places in… </p>
                  </span>
                </div>        
            </div>
          </div>

          <div className="col-md-6">
              <div className="row"> 
                  <div className="col-md-6 item-right">
                      <div className="nl-item-image-right">
                        <img className="img-fluid" src={PostImage} alt="post" /> 
                        <span className="nl-contents-right">
                          <h4> Hotels</h4>
                          <p> Enjoy the best places in… </p>
                        </span>
                      </div>
                  </div>
                  <div className="col-md-6 item-right">
                      <div className="nl-item-image-right">
                        <img className="img-fluid" src={PostImage} alt="post" /> 
                        <span className="nl-contents-right">
                          <h4> Beautiful</h4>
                          <p> Enjoy the best places in… </p>
                        </span>
                      </div>
                  </div>
              </div>
                <div className="row"> 
                  <div className="col-md-6 item-right">
                      <div className="nl-item-image-right">
                        <img className="img-fluid" src={PostImage} alt="post" /> 
                        <span className="nl-contents-right">
                          <h4> Shopping</h4>
                          <p> Enjoy the best places in… </p>
                        </span>
                      </div>
                  </div>
                  <div className="col-md-6 item-right">
                      <div className="nl-item-image-right">
                        <img className="img-fluid" src={PostImage} alt="post" /> 
                        <span className="nl-contents-right">
                          <h4>Bars & Pubs</h4>
                          <p> Enjoy the best places in… </p>
                        </span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      </div>
  );
}
export default Module17;

