import React from 'react';
import logo from '../img/whiteNavLogo.png';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-bg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active text-white" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link text-white" href="/burns">
              Burns
            </a>
            <a className="nav-link text-white" href="/about">
              About us
            </a>
            <a className="nav-link text-white" href="/reward">
              Reward
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
