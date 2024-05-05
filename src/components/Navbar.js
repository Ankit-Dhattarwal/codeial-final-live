import React from 'react';
import coder from '../assets/code.png';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="nav">
      <div className="left-div">
        <Link to="/">
          <img src={coder} alt="logo" />
        </Link>
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://cdn2.iconfinder.com/data/icons/minimal-set-five/32/minimal-48-512.png"
          alt="search-icon"
        />
        <input placeholder="Search" />

        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
            alt="user-dp"
            id="user-dp"
          />
          <span>John Doe</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              {' '}
              <Link to="/logout">Log out</Link>
            </li>
            <li>
              {' '}
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

/*
 <nav className="nav">
      <div className="left-div">
        <img src={coder} alt="logo" />
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://cdn2.iconfinder.com/data/icons/minimal-set-five/32/minimal-48-512.png"
          alt="search-icon"
        />
        <input placeholder="Search" />
        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
                alt="user-dp"
              />
              <span>Ankit Dhattarwal</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
                alt="user-dp"
              />
              <span>Amit Dhattarwal</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
            alt="user-dp"
          />
          <span>Ankit Dhattarwal</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>Log in</li>
            <li>Log out</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
    </nav>
*/
