import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">
                   <h2>Education-management</h2>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">
                            Admin-Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/student">
                            Student-Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/teacher">
                            Teacher-Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
