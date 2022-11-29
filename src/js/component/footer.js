import React, { Component } from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

export const Footer = () => (
  // <body className="d-flex flex-column footer">
  <footer className="flex-shrink-0 py-4 bg-dark text-white-50 mt-auto">
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <h3>Blue Comet Gaming</h3>
        </div>
        <div className="col-sm-2">
          <Link to="/aboutUs">
            <button className="btn btn-primary">
              <h5>About Us</h5>
            </button>
          </Link>
        </div>
      </div>
    </div>
  </footer>
  // </body>
);