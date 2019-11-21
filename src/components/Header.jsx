import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
    
        <div>
            <header>
            <nav>
                <div className="nav-wrapper">
                <Link to="/" className="brand-logo"> <i className="child_care">Home</i></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                   <li><Link to="/maintain">Maintain</Link></li>
                    <li><Link to="/create">Create</Link></li>
                </ul>
                </div>
            </nav>
            </header>
        </div>
    );
}
export default Header;
