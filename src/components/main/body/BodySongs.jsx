import React from 'react';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const BodySongs = ({ playlist }) => {
  return (
    <div className='bodySongs'>
      <div className='bodySongs__icons'>
        <PlayCircleFilledIcon className='body__shuffle' onClick={() => {}} />
        <FavoriteIcon fontSize='large' />
        <MoreHorizIcon />
      </div>
    </div>
  );
};

export default BodySongs;
