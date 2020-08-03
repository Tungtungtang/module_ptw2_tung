import React from 'react';
import './sass/Module39.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
export default function Module39() {

    return (
        <div className="type-39">
            <div className="container">
                <div className="content-module">
                    <div className="content-title">
                        <FontAwesomeIcon icon={faFileExcel} />
                        <span className="title">Description</span>
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                        venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                        elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                        consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus
                    </div>
                </div>
            </div>
        </div>
    );
}
