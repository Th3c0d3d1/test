import React, { useState, useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      results: [],
    },
    actions: {

      searchGames: (value) => {
        // fetch().then().then(data => setStore({ "foo": data.bar }))
        const store = getStore()
        value = "&" + value
        fetch(
          `https://api.rawg.io/api/games?key=bfe242c109884e06860a295ba9f3a547${value}`
        )
          .then(
            (response) => response.json()
            // converts json into js
          )
          .then((responseData) => {
            // setResult(responseData.results);
            setStore({ results: responseData.results });
            // console.log(responseData.results);
            // console.log(store.results)
          })
          
          .catch((error) => {
            // just incase there's an error
            console.log(error);
          });
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
    },
  };
};

export default getState;
