import React from 'react';
import { connect } from 'react-redux';
import { setPlaying, setPlayPlaylist } from '../../../store/actions';
import BodySongsList from './BodySongsList';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const BodySongs = ({ playlist, setPlaying, setPlayPlaylist }) => {
  const playSong = (id) => setPlaying(id);
  const playPlaylist = () => setPlayPlaylist(playlist.id);

  return (
    <div className='bodySongs'>
      <div className='bodySongs__icons'>
        <PlayCircleFilledIcon
          className='body__shuffle'
          onClick={playPlaylist}
        />
        <FavoriteIcon fontSize='large' />
        <MoreHorizIcon />
      </div>
      <BodySongsList playlist={playlist} playSong={playSong} />
    </div>
  );
};

const mapDispatchToProps = {
  setPlaying,
  setPlayPlaylist,
};

export default connect(null, mapDispatchToProps)(BodySongs);
