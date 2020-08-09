import React from 'react';

import BodyHeader from './BodyHeader';
import BodyInfo from './BodyInfo';
import BodySongs from './BodySongs';

const Body = ({ user, playlist }) => {
  return (
    <div className='body'>
      <BodyHeader user={user} />
      <BodyInfo playlist={playlist} />
      <BodySongs playlist={playlist} />
    </div>
  );
};

export default Body;
