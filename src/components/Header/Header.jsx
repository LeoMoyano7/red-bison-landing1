import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
        <nav class="py-2 header-color border-bottom">
          <div class="container d-flex justify-content-lg-end justify-content-center flex-wrap">
            <ul class="nav">
              <li class="nav-item m-auto">
                <a href="#" class="nav-link link-dark px-4 text-white">
                  CUSTOMER <span className="fw-bold">LOG IN</span>
                </a>
              </li>
              <li class="nav-item text-white my-auto">
                |
              </li>
              <li class="nav-item m-auto">
                <a href="#" class="nav-link link-dark px-4 text-white">
                PROPERTY MANAGER <span className="fw-bold">LOG IN</span>
                </a>
              </li>
              <li class="nav-item text-white my-auto">
                |
              </li>
              <li class="nav-item m-auto">
                <a href="#" class="nav-link link-dark px-4 text-white">
                CUSTOMER SERVICE <span className="fw-bold">(877) 583-0496</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
    </>
  );
};

export default Header;
