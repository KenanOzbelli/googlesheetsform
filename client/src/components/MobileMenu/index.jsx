import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const MobileMenu = (props) => {
    return (
        <>
            <div className={`bg-light SideMenuContainer ${props.hidden}`}>
                <div>
                    <h4 className="border-bottom pb-2">Menu</h4>
                </div>
                <ul className="navbar-nav mt-1">
                    <li className="nav-item">
                        <Link className="nav-link active"  to="/" onClick={props.HideMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active"  to="/form" onClick={props.HideMenu}>Form</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/datatable" onClick={props.HideMenu}>Data</Link>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default MobileMenu;