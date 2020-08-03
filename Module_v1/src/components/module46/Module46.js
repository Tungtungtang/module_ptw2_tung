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
        <br/>
          <label htmlFor="fname">Your Name</label> <br/>
          <input type="text" id="fname" name="fname" style={{"width":"300px","height":"40px"}} /> <br/><br/>
          <label htmlFor="lname">Your Email</label> <br/>
          <input type="text" id="lname" name="lname" style={{"width":"300px","height":"40px"}} /><br /><br/>
          <label htmlFor="lname">Subject</label> <br/>
          <input type="text" id="lname" name="lname" style={{"width":"300px","height":"40px"}} /><br /><br/>
          <label htmlFor="lname">Message</label><br/>
          <textarea id="subject" name="subject" placeholder="Message" style={{"width":"300px","height":"200px"}} defaultValue={""} />
          <br />

          <input className="send"type="submit" value="Send Message" />
        </form>
      </div>
      
    </div>

  );

}

export default Module46
