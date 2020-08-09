import React from 'react';

const SidebarOption = ({ option, Icon, id, getUserPlaylist }) => {
  return (
    <div className='sidebarOption' onClick={() => getUserPlaylist(id)}>
      {Icon && <Icon className='sidebarOption__icon' />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
};

export default SidebarOption;
