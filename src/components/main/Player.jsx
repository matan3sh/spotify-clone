import React from 'react';
import { connect } from 'react-redux';
import { getUserPlaylists, getUserPlaylist } from '../../store/actions';

import Sidebar from './sidebar/Sidebar';
import Body from './body/Body';
import Footer from './footer/Footer';

const Player = ({
  playlists,
  token,
  getUserPlaylists,
  user,
  getUserPlaylist,
  playlist,
}) => {
  return (
    <div className='player'>
      <div className='player__body'>
        <Sidebar
          playlists={playlists}
          token={token}
          getUserPlaylists={getUserPlaylists}
          getUserPlaylist={getUserPlaylist}
        />
        <Body user={user} playlist={playlist} />
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  playlists: state.mainApp.playlists,
  token: state.mainApp.token,
  user: state.mainApp.user,
  playlist: state.mainApp.playlist,
});

const mapDispatchToProps = {
  getUserPlaylists,
  getUserPlaylist,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
