import React from "react";
import pic from "../../../images/Rectangle1.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function navbar() {
  return (
    <div className='container-fluid m-0 p-0 bg-info'>
      <nav class="navbar navbar-expand-lg navbar-light top">
        <div class="container-fluid">
          <img src={pic} alt="Rectangle" className="top-left navbar-brand" />

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span class="navbar-toggler-icon"></span> */}
            <div>
              <GiHamburgerMenu />
            </div>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav bg-success">
              <li class="nav-item">
                <Link class="nav-link midele1" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link midele2" to="/OurServices">
                  Our Services
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link midele3" to="/Careers">
                  Careers
                </Link>
              </li>
              <li class="nav-item">
                <button className="btn btn-outline-warning midele4">
                  <Link className="linnk" to="/ContactUs">
                    Contact Us
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav class="navbar navbar-expand-lg navbar-light top">
                <div class="container-fluid">
                    <img src={pic} alt="Rectangle" className="top-left navbar-brand" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link midele1" to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link midele2" to='/OurServices'>Our Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link midele3" to='/Careers'>Careers</Link>
                            </li>
                            <li class="nav-item">
                                <button className="btn btn-outline-warning midele4"><Link className='linnk' to='/ContactUs'>Contact Us</Link></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
    </div>
  );
}
