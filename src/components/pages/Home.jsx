import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Player from '../main/Player';
import Login from '../modal/Login';

const Home = ({ user, token }) => {
  const [openLoginModal, setLoginModal] = useState(true);

  useEffect(() => {
    if (token !== null && user !== null) setLoginModal(false);
  }, [user, token]);

  const onCloseLoginModal = () => setLoginModal(false);

  return (
    <div className='home'>
      <Login
        openLoginModal={openLoginModal}
        onCloseLoginModal={onCloseLoginModal}
      />
      <Player />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.mainApp.user,
  token: state.mainApp.token,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
