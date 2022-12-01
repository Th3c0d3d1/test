import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const {theid} = useParams();
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect (() => {
		fetch(
			`https://api.rawg.io/api/games?key=bfe242c109884e06860a295ba9f3a547&search=${theid}&search_exact=true`
		  )
			.then(
			  (response) => response.json()
			  // converts json into js
			)
			.then((responseData) => {
			  // setResult(responseData.results);
			  setGame(responseData.results[0]); // responseData.results <--- the slug
			  // console.log(responseData.results);
			  // console.log(store.results)
			})
	}, []) 
	// console.log(theid);

	const [game, setGame]= useState({name: 'FirstGame'});
	console.log('example', game.name);

	return (
		<p>{game.name}</p>
		// <div className="searchEntry">
		// 	<div className="">
		// 		<img src={result.background_image} className="img-thumbnail rounded" />
		// 	</div>
		// 	<div className="">
		// 		{result.name}
		// 	</div>
		// </div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
