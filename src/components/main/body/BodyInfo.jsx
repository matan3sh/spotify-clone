import React from 'react';

const BodyInfo = ({ playlist }) => {
  return (
    <div className='bodyInfo'>
      <img src={playlist?.images[0]?.url} alt='' />
      <div className='bodyInfo__text'>
        {playlist && <strong>PLAYLIST</strong>}
        <h2>{playlist?.name}</h2>
        <p>{playlist?.description}</p>
      </div>
    </div>
  );
};

export default BodyInfo;
