import React from 'react';
import { Link } from 'react-router-dom';
import "./css/headercss.css";
import logo from './images/logomain.png';

const Header = () => {
  return (
    <div className="headmain">
      <div className='mainhead'>
        <div className='rhead'>
          <img className="imagelogo" src={logo} alt="logo image"/>
        </div>
        <div className='lhead text [&>*:nth-child(odd)]:=text-xl'>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/components/AboutUs">About</Link></div> {/* Add Link for About page */}
          <div><Link to="/components/RetentionPolicyPage">Retention policy</Link></div>
          <div><Link to="/contact">Contact</Link></div>
          <div><Link to="/components/LandingPage">LandingPage</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
