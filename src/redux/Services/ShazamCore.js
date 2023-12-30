import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6bacc1ca5dmsh6711665f6d75203p1d75abjsn59237c09b218',
      'X-RapidAPI-Host': 'shazam-api7.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-api7.p.rapidapi.com/charts/get-top-songs-in-world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


    export const shazamCoreApi=createApi({
        reducerPath:"shazamCoreApi",
        baseQuery:fetchBaseQuery({
            baseUrl:'https://shazam-api7.p.rapidapi.com/',
            prepareHeaders:()=>{
                
            }
            
        })
    })