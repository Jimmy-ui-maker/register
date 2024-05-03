import React from "react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-md shadow-sm py-1"
      data-aos="fade-down"
      data-aos-delay="5000"
    >
      <div className="container">
        <img
          src="/img/logo.png"
          className=" rounded-2"
          width={40}
          height={30}
          alt=""
        />
        <a href="/" className="navbar-brand fw-bolder text-uppercase">
          Student Registration
        </a>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#about" className="nav-link fw-bold">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#informations" className="nav-link fw-bold">
              Informations
              </a>
            </li>
            <li className="nav-item">
              <a href="#events" className="nav-link fw-bold">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a href="#footer" className="nav-link fw-bold">
                Last Page
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
