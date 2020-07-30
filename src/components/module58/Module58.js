import React from 'react';
import './sass/Module58.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostImage from "./images/img-module.jpg";
function Module96() {
  return (
    <div className="type-58">
  <div className="container">
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <a className="all" data-toggle="pill" href="#all">All</a>
      </li>
      <li className="nav-item">
        <a className="casual" data-toggle="pill" href="#casual">Applications</a>
      </li>
      <li className="nav-item">
        <a className="night-out" data-toggle="pill" href="#night-out">Illustration</a>
      </li>
      <li className="nav-item">
        <a className="night-out" data-toggle="pill" href="#night-out">Logo</a>
      </li>
      <li className="nav-item">
        <a className="office" data-toggle="pill" href="#office">Music</a>
      </li>
    </ul>
    {/* Tab panes */}
    <div className="tab-content">
      <div className="tab-pane container active" id="all">
        <div className="container">
        <div className="row row-module">
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
        </div>

        </div>
      </div>
      <div className="tab-pane container fade" id="casual">
        <div className="container">
          <div className="row">
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
        </div>
        </div>
      </div>
      <div className="tab-pane container fade" id="night-out">
        <div className="container">
          <div className="row">
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
        </div>
        </div>
      </div>
      <div className="tab-pane container fade" id="office">
        <div className="container">
          <div className="row">
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
          <div className="col-md-3">
            <div className="img"> <img  className="img-fluid" src={PostImage} alt="post" /> </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );

}

export default Module96
