import React from "react";
import { NavLink, Redirect } from "react-router-dom";


function Header() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark  static-top">
            <div className="container" >
                <a className="navbar-brand" href="#">
                    <img src="https://placeholder.pics/svg/150x50/888888/EEE/Logo" alt="..." height="30" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{position:"relative", right:"45%"}} >
                    
                    <ul className="navbar-nav ms-auto" >
                        <li className="nav-item" id="home">
                            {/* <a class="nav-link active" aria-current="page" href="">Home</a> */}
                            <NavLink exact activeClassName="active" to="/" style={{textDecoration:"none", color:"black",
                              fontFamily:"sans-serif", fontSize:"larger"}} >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item" id="products">
                            {/* <a class="nav-link" href="#">Link</a> */}
                            <NavLink activeClassName="active" to="/products" style={{textDecoration:"none", color:"black",
                              fontFamily:"sans-serif", fontSize:"larger"}} >
                                Products
                            </NavLink>
                        </li>

                        <li className="nav-item" id="albums">
                            {/* <a class="nav-link" href="#">Link</a> */}
                            <NavLink activeClassName="active" to="/albums" style={{textDecoration:"none", color:"black",
                              fontFamily:"sans-serif", fontSize:"larger"}} >
                                Albums
                            </NavLink>
                        </li>

                        <li className="nav-item" id="blogs">
                            {/* <a class="nav-link" href="#">Link</a> */}
                            <NavLink activeClassName="active" to="/blogs" style={{textDecoration:"none", color:"black",
                              fontFamily:"sans-serif", fontSize:"larger"}} >
                                Blogs
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            {/* <a class="nav-link" href="#">Link</a> */}
                            <NavLink activeClassName="active" to="/cart" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-person" viewBox="1 2 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">My Cart</a></li>
                                <li><a className="dropdown-item" href="#">My Wishlist</a></li>

                                <li><a className="dropdown-item" href="#">Logout</a>

                                </li>
                                

                            </ul>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>

        
    );
}
export default Header;