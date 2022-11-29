import React, {useState, useEffect, useContext} from "react";
import { Context } from '../store/appContext.js'
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {

	const [value, setValue] = useState(''); // creating state; user text inputs in real time
	// const [result, setResult] = useState([]); // stores what we get back in the array to render to the site

	const {store, actions} = useContext(Context)

	useEffect(() => {
		actions.searchGames(`search=${value}`)

	}, [value]); // triggered not every render cycle, but only when value changes

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
            <h2 className="text-decoration-none link-light">
              <i className="fa-solid fa-meteor mx-2"></i>Blue Comet Gaming
            </h2>
        </Link>
        <form className="d-flex">
          <input
          onChange={(e) => setValue(e.target.value)} // sets the value to the event =>
          value = {value}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Find Games"
            aria-label="Search"
          ></input>
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div className="ml-auto">
          <p className="text-white text-center">Check out our Github</p>
          {/* <Link to="/demo">
            <button className="btn btn-primary mx-2">Steven</button>
          </Link> */}
          <button className="btn btn-primary mx-2">
            <a href="https://www.github.com/Th3c0d3d1/" className="text-decoration-none link-light">Steven</a>
          </button>
          <button className="btn btn-primary mx-2">
            <a href="https://www.github.com/ItsLuisT/" className="text-decoration-none link-light">Luis</a>
          </button>
          <button className="btn btn-primary mx-2">
            <a href="https://www.github.com/JKD111995/" className="text-decoration-none link-light">Jacob</a>
          </button>
          {/* <Link to="/demo">
            <button className="btn btn-primary mx-2">Jacob</button>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};