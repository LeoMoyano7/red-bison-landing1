import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
        <nav class="py-2 header-color border-bottom">
          <div class="container d-flex justify-content-lg-end p-0 justify-content-center flex-wrap">
            <ul class="nav header-position">
              <li class="nav-item m-auto">
                <span href="#" class="nav-link link-dark px-4 text-white">
                  CUSTOMER <a href="#" className="link-header">LOG IN</a>
                </span>
              </li>
              <li class="text-white my-auto header-separator">
                |
              </li>
              <li class="nav-item m-auto">
                <span href="#" class="nav-link link-dark px-4 text-white">
                PROPERTY MANAGER <a href="#" className="link-header">LOG IN</a>
                </span>
              </li>
              <li class="text-white my-auto header-separator">
                |
              </li>
              <li class="nav-item m-auto">
                <span href="#" class="nav-link link-dark px-4 text-white">
                CUSTOMER SERVICE <span className="fw-bold">(877) 583-0496</span>
                </span>
              </li>
            </ul>
          </div>
        </nav>
    </>
  );
};

export default Header;
