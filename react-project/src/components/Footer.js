import React from "react";
import Fotter from '../css/Fotter.css'
import Contact from '../views/Contact'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 address */}
          <div className="col">
            <h2>Cost of living and expenses</h2>
            <h3 className="list-unstyled">
              <li>+353(01)-000-000</li>
              <li>LEIXLIP, IRELAND</li>
              <li>123 Streeet South North</li>
            </h3>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Tips</h4>
            <ui className="list-unstyled">
              <li>HELP</li>
              <li><Link className="App" to="/About">About Us</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
            </ui>
          </div>
          {/* Column3 links to social media */}
          <div className="col">
            <h4>SOCIAL MEDIA LINKS</h4>
            <ui className="list-unstyled">
              <li><a href="https://www.facebook.com">FACEBOOK</a></li>
              <li><a href="https://www.twitter.com">TWITTER</a></li>
              <li><a href="https://www.instagram.com">INSTAGRAM</a></li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} NCI | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;