import React from 'react';
import './sass/Module38.scss';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
function Module38() {
  return (
    <div className="type-38">
      <div className="container container-module38">
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
        {/* <i class="fa fa-usd" aria-hidden="true"></i> */}

        <Navbar className="nav1" collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">HOME</Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"> <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Nav.Link href="#features">DESCRIPTION</Nav.Link>
              <Nav.Link href="#pricing">LISTING FEATURES</Nav.Link>
              <Nav.Link href="#features">LOCATION</Nav.Link>
              <Nav.Link href="#pricing">VIDEO</Nav.Link>
              <Nav.Link href="#features">COMMENT</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>


      </div>
    </div>
  );
}
export default Module38
