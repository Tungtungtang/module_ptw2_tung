import React from 'react';
import './sass/Module23.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Iamge from './images/img-module.PNG';

function Module23() {
  return(
        <div className="type-23">
            <div className="container">
                <div className="nl-header-name">
                    <h2 className="nl-title">Featured Categories</h2>
                    <p className="p-title">Explore restaurants, bars, and cafés by categories</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <div className="nl-icon-part">
                                <img src={Iamge} alt="hinh"/>
                            </div>
                            <a href="/#">
                             <h3 className="nl-item-name"> Food & Drink</h3>
                            </a>
                           
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <div className="nl-icon-part">
                                <img src={Iamge} alt="hinh"/>
                            </div>
                             <a href="/#">
                            <h3 className="nl-item-name">Hotels</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <div className="nl-icon-part">
                                <img src={Iamge} alt="hinh"/>
                            </div>
                             <a href="/#">
                            <h3 className="nl-item-name">Beautiful</h3>
                           </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <div className="nl-icon-part">
                                <img src={Iamge} alt="hinh"/>
                            </div>
                             <a href="/#">
                            <h3 className="nl-item-name">Shopping</h3>
                           </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <div className="nl-icon-part">
                                <img src={Iamge} alt="hinh"/>
                            </div>
                             <a href="/#">
                            <h3 className="nl-item-name">Bars & Pubs</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <div className="nl-icon-part">
                                <img src={Iamge} alt="hinh"/>
                            </div>
                             <a href="/#">
                            <h3 className="nl-item-name">Restaurants</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <div className="nl-icon-part">
                                <img src={Iamge} alt="hinh"/>
                            </div>
                             <a href="/#">
                            <h3 className="nl-item-name">Destinations</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <div className="nl-icon-part">
                                <img src={Iamge} alt="hinh"/>
                            </div>
                             <a href="/#">
                            <h3 className="nl-item-name">Nightlife</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Module23
