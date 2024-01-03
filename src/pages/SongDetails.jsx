import React, { useEffect } from 'react';
import { useGetSongsDetailsQuery } from '../redux/Services/ShazamCore';

const SongDetails = ({ songId }) => {
  const { data, isFetching, error } = useGetSongsDetailsQuery({ songid: songId });

  console.log(data.errors.title)


  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error fetching song details.</p>;

  
  return (
    <div>
    
    </div>
  );
};

export default SongDetails;


