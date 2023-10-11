import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <h2>hi i am navbar</h2>
            <Link to="/">Home</Link>
            {/* <Link to="/">Home</Link> */}
            {/* <a href="/">ghr</a> */}
        </div>
    );
}

export default Navbar;