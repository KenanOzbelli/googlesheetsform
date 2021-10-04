import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu'
const Navigation = () => {
    const [hidden, setHidden] = useState('hidden');

    const ShowSideMenu = () => {
        const pageOverlay = document.querySelector('.pageOverlay');

        if (hidden === 'hidden') {
            pageOverlay.style = "visibility:visible; opacity:.5;"
            document.querySelector('body').style.overflow = "hidden";
            setHidden('show')
        } else {
            pageOverlay.style = "";
            document.querySelector('body').style = "";
            setHidden('hidden');
        }

        pageOverlay.addEventListener('click', (evt) => {
            evt.target.style = "";
            document.querySelector('body').style = "";
            setHidden('hidden');
        })
    }

    const HideMenu = () => {
        const pageOverlay = document.querySelector('.pageOverlay');

        pageOverlay.style = "";
        document.querySelector('body').style = "";
        setHidden('hidden');
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand text-success" to="/" onClick={HideMenu}>Google Sheets</Link>
                <button className="navbar-toggler border-0" type="button" id="sidebarMenu" aria-label="Toggle navigation"
                    onClick={ShowSideMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/form">Form</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/datatable">Data</Link>
                        </li>
                    </ul>
                </div>
                <MobileMenu hidden={hidden} HideMenu={HideMenu} />
            </div>
        </nav>
    )
}

export default Navigation;
