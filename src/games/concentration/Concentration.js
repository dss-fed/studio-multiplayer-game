import React, { useState, useEffect } from 'react';
import Session from '../../Session.js';
import UserApi from '../../UserApi.js';
import firebase from 'firebase';
import Grid from './Grid';

const numberOfCats = 8;
const catApiKey = 'e7e0b9dd-9a5a-4061-bbf9-dd0b575e8945';
const catApiUrl = `https://api.thecatapi.com/v1/images/search?limit=${numberOfCats}`;

export default function Concentration(props) {
  const session = new Session(props);
  const data = session.useSessionData();
  const [catData, setCatData] = useState(null);

  useEffect(() => {
    const fetchOptions = {
      headers: {
        'x-api-key': catApiKey
      }
    };

    fetch(catApiUrl, fetchOptions).then((response) => {
      response.json().then((result) => {
        console.log(result);
        const processedData = processCatData(result);

        setCatData(processedData);
      });
    });
  }, []);

  return (
    <div>
      <Grid
        catData={catData}
      />
    </div>
  );
}

function processCatData(data) {
  const processedData = [];
  const randomizedData = [];

  for (let i = 0; i < data.length; i++) {
    const datum = {
      id: data[i].id,
      url: data[i].url
    }
    processedData.push(datum);
  }

  for (let i = 0; i < data.length; i++) {
    const datum = {
      id: data[i].id,
      url: data[i].url
    }
    processedData.push(datum);
  }

  while (processedData.length) {
    const randomIndex = Math.floor(Math.random() * processedData.length);
    const randomCat = processedData.splice(randomIndex, 1)[0];

    randomizedData.push(randomCat);
  }

  return randomizedData;
}
