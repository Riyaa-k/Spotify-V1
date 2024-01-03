import React from 'react';
import { useGetSongsDetailsQuery } from '../redux/Services/ShazamCore'; // Update the path

const DetailsHeader = ({ songId }) => {
  // Use the useGetSongsDetailsQuery hook with the provided songId
  const { data: songsDetails, error, isLoading } = useGetSongsDetailsQuery({ songid: songId });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  // Render your component using songsDetails
  return (
    <div>
      {songsDetails && (
        <div>
          <p>Subject: {songsDetails.share.subject}</p>
          <p>Text: {songsDetails.share.text}</p>
          <p>Href: {songsDetails.share.href}</p>
          <img src={songsDetails.share.image} alt="Share Image" />
          <p>Twitter: {songsDetails.share.twitter}</p>
          <p>HTML: {songsDetails.share.html}</p>
          <img src={songsDetails.share.avatar} alt="Avatar Image" />
          <p>Snapchat: {songsDetails.share.snapchat}</p>
        </div>
      )}
    </div>
  );
};

export default DetailsHeader;


