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
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5" style={{width:"100%", zIndex:"100"}}>
            <div className="container-fluid">
                <Link className="navbar-brand text-success fw-bolder mx-2" to="/" onClick={HideMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" width={30} height={30}>
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                </svg>
                </Link>
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
