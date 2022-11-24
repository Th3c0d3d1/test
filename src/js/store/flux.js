import React, { useState, useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      searchGames: (value) => {
        // useEffect(() => {
          // callback function triggered as specified by the array (line 77)
          if (value.length > 0) {
            // <--- if they actually type something into the textbox (value)

            fetch(
              `https://api.rawg.io/api/games?key=bfe242c109884e06860a295ba9f3a547&search=${value}`
            )
              .then(
                (response) => response.json()
                // converts json into js
              )
              .then((responseData) => {
                // setResult(responseData.results);
                console.log(responseData.results);
                // let searchQuery = value.toLowerCase(); // does search all lowercase

                // for (const key in responseData.results) {
                //   // let game = responseData[key].name.toLowerCase(); // game <--- parent in api syntax; name <--- child in api syntax
                //   // ^^^ makes data in api lowercase to match input type

                // //   if (value.slice(0, value.length).indexOf(value) !== -1) {
                // //     // slice <--- matches text as inputted;
                // //     // ^^^ -1 <--- means no match
                // //     // setResult (prevResult => { // previousResult <--- shows previous matches as user types
                // //     // 	return [...prevResult, responseData.results[].name] // spread operator
                // //     // });
                // //   }
                // }
              }
			  )
              .catch((error) => {
                // just incase there's an error
                console.log(error);
              });
          }
          // else {
          // 	setResult([]); // incase anything else happens, it'll display an empty array
          // }
        // }, [value]); // triggered not every render cycle, but only when value changes
      },
    },
  };
};

export default getState;
