import React from "react";
import './Footer.css';
// import { Link } from "react-router-dom";



function Footer() {
  return (

    <div className="footer__section">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,197.3C384,181,480,107,576,80C672,53,768,75,864,96C960,117,1056,139,1152,170.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path><text textAnchor="middle" x="55" y="55">
        <p className="footer__sectionOptionOne">© Consumer Utility Advocate</p>
        <p className="footer__sectionOptionTwo">167 - 170 West State Street</p>
        <p className="footer__sectionOptionTwo">Sharon, Pa. 16146</p>
        <p className="footer__sectionOptionTwo">Phone: 724.979.4103</p>
       </text></svg>
    </div>
  );
}

export default Footer;