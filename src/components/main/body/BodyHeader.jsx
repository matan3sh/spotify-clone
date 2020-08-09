import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

const BodyHeader = ({ user }) => {
  return (
    <div className='bodyHeader'>
      <div className='bodyHeader__left'>
        <SearchIcon />
        <input
          type='text'
          placeholder='Search for Artists, Songs or Podcasts '
        />
      </div>
      <div className='bodyHeader__right'>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default BodyHeader;
