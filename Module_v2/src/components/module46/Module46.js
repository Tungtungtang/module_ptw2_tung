import React from 'react';
import './sass/Module46.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Module46() {
  return (
    <div className="type-46">
      <div className="container">
        <div className="title">
          <h4>Contact Form</h4>
        </div>
        <form action="/#">
          <br />
          <label className="text" htmlFor="fname">Your Name</label> <br />
          <input className="input-text" type="text" id="fname" name="fname" size="40" /> <br />
          <label className="text" htmlFor="lname">Your Email</label> <br />
          <input className="input-text" type="text" id="lname" name="lname" size="40" /><br />
          <label className="text" htmlFor="lname">Subject</label> <br />
          <input className="input-text" type="text" id="lname" name="lname" size="40" /><br />
          <label className="text" htmlFor="lname">Message</label><br />
          <textarea id="subject" name="subject" placeholder="Message" rows="4" cols="43" defaultValue={""} />
          <div className="btn">
            <input className="send" type="submit" value="Send Message" />
          </div>
        </form>

      </div>
    </div>

  );

}

export default Module46
