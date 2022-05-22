import React, { useState, useEffect, Children } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { logout } from "../store/actions/userActions";

const Layout = (props) => {
    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const logOut = () => {
        dispatch(logout());
    }
    return (
        <div className="grid-container">
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">New Logo</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="aboutusDropdownMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ABOUT US
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="aboutusDropdownMenu">
                                        <li><Link to="/" className="dropdown-item">Action</Link></li>
                                        <li><Link to="/" className="dropdown-item">Another action</Link></li>
                                        <li><Link to="/" className="dropdown-item">Something else here</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="classDropdownMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        CLASSES
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="classDropdownMenu">
                                        <li><Link to="/" className="dropdown-item">Action</Link></li>
                                        <li><Link to="/" className="dropdown-item">Another action</Link></li>
                                        <li><Link to="/" className="dropdown-item">Something else here</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/teachers" className="nav-link">TEACHERS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/get-started" className="nav-link">GET STARTED</Link>
                                </li>
                                {userInfo ? (
                                    <>
                                        <Link to="/profile" className="nav-link">{userInfo.name}</Link>
                                        <Link onClick={logOut} className="nav-link">Log Out</Link>
                                    </>
                                ) : (
                                    <Link to="/signin" className="nav-link">Sign In</Link>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="main">
                <div className="content">
                    {props.children}
                </div>
            </main>
            <footer className="footer">All right reserved.</footer>
        </div>
    );
}

export default Layout;