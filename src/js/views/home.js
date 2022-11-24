import React, {useState, useEffect, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js'
import { Result } from "parse-github-url";

// export const Home = () => (
// 	<div className="text-center mt-5">
// 		<h1>Hello Rigo!</h1>
// 		<p>
// 			<img src={rigoImage} />
// 		</p>
// 		<a href="#" className="btn btn-success">
// 			If you see this green button, bootstrap is working
// 		</a>
// 	</div>
// );



export const Home = (props) => {
	const [value, setValue] = useState(''); // creating state; user text inputs in real time
	const [result, setResult] = useState([]); // stores what we get back in the array to render to the site

	const {store, actions} = useContext(Context)

	useEffect(() => {
		actions.searchGames(value)

	}, [value]); // triggered not every render cycle, but only when value changes
  

	return (
		<div>
			<p className="titleText"> Game Search </p>
				<input type="text"
				className="searchBar"
				onChange={(e) => setValue(e.target.value)} // sets the value to the event =>
				value = {value}
				/>
				<div className="searchBack">
					{/* {result.map((result, index) => ( // index will include key value
						<a href="#" key={index}>
							<div className="searchEntry">
								{result}
							</div>
						</a>
					))} */}
				</div>
		</div>
	)
}