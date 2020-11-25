import React from 'react';
import '../css/MenuPage.css';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Menu = ({ history }) => {
  return (
    <>
      <div className="menuHeader">
        <h1 className="menuTitle">MENU</h1>
        <button className="backButton" onClick={() => history.goBack()}>
          {' '}
          <RiArrowLeftSLine
            size={35}
            style={{ color: 'rgba(5, 95, 158, 1)' }}
          />
        </button>
      </div>
      <div className="searchBar">
        <input className="searchMenu" type="text" placeholder="Search"></input>
      </div>
      <div className="menuLinks">
        <div className="line1">
          <Link to="/profile" className="menuProfile">
            PROFILE
          </Link>
          <Link to="/about" className="menuAbout">
            ABOUT
          </Link>
        </div>
        <div className="line2">
          <Link to="/chatroom" className="menuChat">
            Chat Now
          </Link>
          <Link to="/event" className="menuEvent">
            Events
          </Link>
        </div>
        <div className="line3">
          <Link to="/policy" className="MenuPolicy">
            Community Guidelines
          </Link>
          <Link to="/veteranprograms" className="menuVa">
            Veteran Programs
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
