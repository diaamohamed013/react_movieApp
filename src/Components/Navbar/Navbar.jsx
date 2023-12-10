import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './Navbar.scss'
export default function Navbar(props) {
    return (
        <>
            <nav className='navbar navbar-expand-lg'>
                <div className="container">
                    <Link className='navbar-brand d-flex align-items-center text-white' to="/home" >
                        Movzie
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon navbar-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {props.userData !== null ?
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) =>
                                        isActive ? 'active' : 'nav-link'
                                    }
                                        to="home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) =>
                                        isActive ? 'active' : 'nav-link'
                                    }
                                        to="movies">Movies</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) =>
                                        isActive ? 'active' : 'nav-link'
                                    }
                                        to="tvshows">Tv Shows</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) =>
                                        isActive ? 'active' : 'nav-link'
                                    }
                                        to="people">People</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink className={({ isActive }) =>
                                        isActive ? 'active' : 'nav-link'
                                    }
                                        to="about">Profile</NavLink>
                                </li> */}
                            </ul> : " "}
                        {props.userData !== null ?
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-2">
                                    <NavLink className={({ isActive }) =>
                                        isActive ? 'active' : 'nav-link'
                                    }
                                        to="search">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </NavLink>
                                </li>
                                <div className="social d-flex flex-row align-items-center mx-3">
                                    <a href="https://www.facebook.com/diaamohamed212/" target="_blank" rel="noopener noreferrer">
                                        <i className='fab mx-2 fa-facebook'></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/diaa-mohamed-59853b155/" target="_blank" rel="noopener noreferrer">
                                        <i className='fab mx-2 fa-linkedin'></i>
                                    </a>
                                    <a href="https://github.com/diaamohamed013" target="_blank" rel="noopener noreferrer">
                                        <i className='fab mx-2 fa-github'></i>
                                    </a>
                                </div>
                                {/* <li className="nav-item">
                                    <a onClick={props.logOut} role="button" className="nav-link">
                                        <span className='mx-2 text-info'>{props.userData.first_name}</span>
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                    </a>
                                </li> */}
                            </ul>
                            : <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <div className="social d-flex flex-row align-items-center mx-3">
                                    <a href="https://www.facebook.com/diaamohamed212/" target="_blank" rel="noopener noreferrer">
                                        <i className='fab mx-2 fa-facebook'></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/diaa-mohamed-59853b155/" target="_blank" rel="noopener noreferrer">
                                        <i className='fab mx-2 fa-linkedin'></i>
                                    </a>
                                    <a href="https://github.com/diaamohamed013" target="_blank" rel="noopener noreferrer">
                                        <i className='fab mx-2 fa-github'></i>
                                    </a>
                                </div>
                                {/* <li className="nav-item mx-lg-3">
                                    <NavLink className={({ isActive }) =>
                                        isActive ? 'active' : 'nav-link'
                                    }
                                        to="login">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) =>
                                        isActive ? 'active' : 'nav-link'
                                    }
                                        to="register">Register</NavLink>
                                </li> */}
                            </ul>}

                    </div>
                </div>
            </nav>
        </>
    )
}
