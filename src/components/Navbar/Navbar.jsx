import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container py-2">
                <img className="navbar-brand w-25" src="https://i2.wp.com/news.theregistrysf.com/wp-content/uploads/2019/10/RB-logo-horiz-main.jpg?w=696&ssl=1" alt=""/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  
                    <ul className="navbar-nav py-2 w-100 d-flex justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link fs-5 mx-2" href="#">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 mx-2" href="#">SOLUTIONS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 mx-2" href="#">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 mx-2" href="#" >CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
