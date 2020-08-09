import React from 'react';

const BodySongsItem = ({ track, playSong }) => {
  return (
    <div className='songItem' onClick={() => playSong(track.id)}>
      <img
        className='songItem__album'
        src={track?.album.images[0].url}
        alt=''
      />
      <div className='songItem__info'>
        <h2>{track?.name}</h2>
        <p>
          {track?.artists?.map((artist) => artist.name).join(', ')}
          {track?.album?.name}
        </p>
      </div>
    </div>
  );
};

export default BodySongsItem;
