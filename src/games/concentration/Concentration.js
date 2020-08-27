import React, { useState, useEffect, useReducer } from 'react';
import Session from '../../Session.js';
import UserApi from '../../UserApi.js';
import firebase from 'firebase';
import Grid from './Grid';

const numberOfCats = 8;
const catApiKey = 'e7e0b9dd-9a5a-4061-bbf9-dd0b575e8945';
const catApiUrl = `https://api.thecatapi.com/v1/images/search?limit=${numberOfCats}`;

const initialState = {
  cardsFlipped: [],
  catData: null
};

const UPDATE_CAT_DATA = 'UPDATE_CAT_DATA';
const FLIP_CARD = 'FLIP_CARD';
const FLIP_BACK_CARDS = 'FLIP_BACK_CARDS';

function reducer(state, action) {
    switch (action.type) {
        case UPDATE_CAT_DATA:
                return {
                ...state,
                catData: action.payload
                };
        case FLIP_CARD:
                const cardsFlipped = [...state.cardsFlipped];
                cardsFlipped.push(action.payload);
                return {
                ...state,
                cardsFlipped
                };
        case FLIP_BACK_CARDS:
            return {
                ...state,
                cardsFlipped: []
            };
        default:
          break;
    }
}

export default function Concentration(props) {
  const session = new Session(props);
  const data = session.useSessionData();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchOptions = {
      headers: {
        'x-api-key': catApiKey
      }
    };

    fetch(catApiUrl, fetchOptions).then((response) => {
      response.json().then((result) => {
        const processedData = processCatData(result);

        dispatch({
            type: UPDATE_CAT_DATA,
            payload: processedData
        });
      });
    });
  }, []);

  return (
    <div
      style={{
        boxSizing: 'border-box'
      }}
    >
      <Grid
        catData={state.catData}
      />
    </div>
  );
}

function processCatData(data) {
  const duplicatedData = [];
  const randomizedData = [];

  for (let i = 0; i < data.length; i++) {
    const datum = {
      id: data[i].id,
      url: data[i].url
    }
    duplicatedData.push(datum);
  }

  for (let i = 0; i < data.length; i++) {
    const datum = {
      id: data[i].id,
      url: data[i].url
    }
    duplicatedData.push(datum);
  }

  while (duplicatedData.length) {
    const randomIndex = Math.floor(Math.random() * duplicatedData.length);
    const randomCat = duplicatedData.splice(randomIndex, 1)[0];

    randomizedData.push(randomCat);
  }

  return randomizedData;
}
