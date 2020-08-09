import React, { useEffect } from 'react';
import SidebarOption from './SidebarOption';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const options = [
  { icon: HomeIcon, option: 'Home' },
  { icon: SearchIcon, option: 'Search' },
  { icon: LibraryMusicIcon, option: 'Your Library' },
];

const Sidebar = ({ playlists, token, getUserPlaylists, getUserPlaylist }) => {
  useEffect(() => {
    const getPlaylists = async (token) => {
      getUserPlaylists(token);
    };
    getPlaylists(token);
    // eslint-disable-next-line
  }, [token]);

  return (
    <div className='sidebar'>
      <img
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
        alt='spotify-logo'
        className='sidebar__logo'
      />
      {options.map((item, index) => (
        <SidebarOption Icon={item.icon} option={item.option} key={index} />
      ))}
      <br />
      <strong className='sidebar__title'>Playlist</strong>
      <hr />
      {playlists?.items?.map((playlist, index) => (
        <SidebarOption
          option={playlist.name}
          key={index}
          id={playlist.id}
          getUserPlaylist={getUserPlaylist}
        />
      ))}
    </div>
  );
};

export default Sidebar;
