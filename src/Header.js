import React from 'react'
import logo from './logo.png';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

function Header() {
    return (
        <nav className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt='cua logo' />
        </Link>

        <div className="header__search">
        <input type="text" className="header__searchInput" placeholder="Search by Zip Code..." />
        <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">

            <div className="header__option2">
                <Link to="/" className="header__link">
                <div className="header__option2">
                    <span className="header__optionLineTwo">Service Areas</span>
                </div>
                </Link>

                <Link to="/" className="header__link">
                <div className="header__option2">
                    <span className="header__optionLineTwo">Service Providers</span>
                </div>
                </Link>

                <Link to="/" className="header__link">
                <div className="header__option2">
                    <span className="header__optionLineTwo">Utility Companies</span>
                </div>
                </Link>

                </div>
           

            <Link to="/electric" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Shop for </span>
                <span className="header__optionLineTwo">Electricity</span>
             </div>
            </Link>

            <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Shop for </span>
                <span className="header__optionLineTwo">Gas</span>
             </div>
            </Link>

            <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineTwo">About Us</span>
             </div>
            </Link>

            <Link to="/help" className="header__link">
                <div className="header__optionHelp">
                 <ContactSupportIcon />
                 <span className="header__optionLineTwo header__help">Get Help </span>
                </div>
            </Link>

            </div>

        </nav>
    )
}

export default Header
