import React from "react";
import logo from '../img/nav-logo.png'

function Footer() {
  return (
    <footer className="footer text-light nav-bg">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <img src={logo} alt="logo" />
            <p className="text-muted">
               
              The 1776 Burn Dashboard is a specialized tool designed to provide
              a comprehensive overview of burn activities and identify the top
              burners within a given context. This dashboard presents relevant
              information and insights related to burning, focusing on key
              metrics and trends.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h3 className="underline mb-3">Utilities</h3>
            <ul className="list-unstyled">
              
              <li>
                <a
                  href="/"
                  className="text-muted"
                >
                  Burn Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h3 className="underline mb-3">Follow Us</h3>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/twitter"
                  className="text-muted"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a href="/telegram" className="text-muted">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
