import React from 'react';
import './sass/Module101.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostImage from "./images/logo-module.png";

function Module101() {
  return (
    <div className="type-101">

      <div className="title-icon">
        <div className="icon">
          <a href="/#">
            <img src={PostImage} alt="post" />
          </a>
        </div>
      </div>
      <div className="container">
        <div className="nav">
          <ul>
            <li>
              <a href="/#">
                LOG IN
              </a>
            </li>

            <li>
              <a href="/#">
                CREATE NEW ACCOUNT
              </a>
            </li>

            <li>
              <a href="/#" className="mauxanh">
                RESET YOUR PASSWORD
              </a>

            </li>
          </ul>

        </div>
        <div className="form-input">
          <form action="/#">
            <div className="khung-input">
              <label className="text" htmlFor="fname">Username or email address</label> <br />
              <input className="input-text" type="text" id="fname" name="fname" size="65" /> <br />
            </div>

            <label className="text" htmlFor="fname">Password reset instructions will be sent to your registered email address.</label> <br />
            <div className="btn">
              <input className="send" type="submit" value="Submit" />
            </div>
          </form>
        </div>


      </div>


    </div>

  );

}

export default Module101
