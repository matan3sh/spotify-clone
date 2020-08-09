import React from 'react';
import BodySongsItem from './BodySongsItem';

const BodySongsList = ({ playlist, playSong }) => {
  return (
    <div>
      {playlist?.tracks.items.map((item, index) => (
        <BodySongsItem playSong={playSong} track={item.track} key={index} />
      ))}
    </div>
  );
};

export default BodySongsList;
