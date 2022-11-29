import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/aboutUs.css";

export const AboutUs = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <br />
      <div className="about-section text-center">
        <h1>About Us</h1>
        <p>Who we are and what we do.</p>
      </div>
      <div className="card-deck d-flex">
        <div className="card">
          <img
            className="card-img-top"
            src="https://www.santosfood.com/wp-content/uploads/2020/01/img-7.jpg"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Steven</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://www.traderjoes.com/content/dam/trjo/products/m20701/78963.png"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Luis</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://www.meijer.com/content/dam/meijer/product/0002/40/0005/98/0002400005988_1_A1C1_0600.png"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Jacob</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};