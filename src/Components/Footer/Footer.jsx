import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-primary">
      <div className="footer-up flex mb-10">
        <div className="logo-div flex flex-col gap-y-10">
          <a href="#">
            <img src="/public/Images/logo.jpg" alt="" className="logo-footer" />
          </a>
          <p className="text-secondary">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular. Li lingues differe solmen in li.
          </p>
          <div className="social text-secondary flex gap-x-8">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="quick-links ">
          <h2 className="text-secondaryDark font-bold text-lg">Quick Links</h2>
          <div className="text-secondary">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="contact-us ">
          <h2 className="text-secondaryDark font-bold text-lg">Contact Us</h2>
          <div className="contact-divs">
            <div className="text-secondary flex">
              <i className="m-1 fas fa-envelope"></i>
              <p>info@malikatalmas.com</p>
            </div>
            <div className="text-secondary flex">
              <i className="m-1 fas fa-map-marker-alt"></i>
              <p>UAE / Oman</p>
            </div>
            <div className="text-secondary flex">
              <i className="m-1 fas fa-phone"></i>
              <div className="flex flex-col">
                <p>UAE: +971 566 786 979</p>
                <p>KSA: +966 549 971 389</p>
                <p>UAE: +971 545 416 979</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-secondary" />
      <div className="footer-up text-secondary">
        <p className="text-center">Ⓒ 2024 All rights reserved Bright Version</p>
      </div>
    </footer>
  );
};

export default Footer;
