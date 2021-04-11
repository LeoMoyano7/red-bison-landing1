import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand fs-2" href="#">Red Bison</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  
                    <ul className="navbar-nav py-2 w-100 d-flex justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SOLUTIONS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
