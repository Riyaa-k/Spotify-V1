import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {Error,Loader,SongCard} from "../components";
import { useGetSongsByCountryQuery } from '../redux/Services/ShazamCore';

const CountryTracks = () => {

    const [country,setCountry]=useState('');
    const [Loading,setLoading]=useState(true);
    const {activeSong,isPlaying}=useSelector((state)=>state.player);
    const {data,isFetching,error}=useGetSongsByCountryQuery(country);

    console.log(country)

    useEffect(()=>{
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_XXmTTCAwFlZxayLCxkeCLlZU6EOQ1`)
    .then((res)=>setCountry(res?.data?.location?.country))
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false));

},[country]);

if(isFetching && Loading) return <Loader title="Loading Songs"></Loader> 

if(error && country) return <Error />

    return(
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Around You</h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {data?.tracks.map((track, i) => (
          <SongCard
            key={track.key}
            song={track}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}


            </div>

        </div>
    )



}

export default CountryTracks;
