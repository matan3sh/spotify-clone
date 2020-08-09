import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getLoggedInUser } from '../../store/actions';

import { loginUrl } from '../../config/spotify';
import { getTokenFromUrl } from '../../config/spotify';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 325,
    backgroundColor: '#000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Login = ({ getLoggedInUser, openLoginModal, onCloseLoginModal }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    const setLoggedInUser = async () => {
      if (_token) {
        await getLoggedInUser(_token);
        onCloseLoginModal();
      }
    };
    setLoggedInUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Modal open={openLoginModal} onClose={() => onCloseLoginModal()}>
      <div style={modalStyle} className={classes.paper}>
        <div className='login'>
          <img
            src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
            alt='logo'
          />
          <p>For Better Performance Please Login With Your Spotify Account</p>
          <a href={loginUrl}>Login With Spotify</a>
        </div>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = {
  getLoggedInUser,
};

export default connect(null, mapDispatchToProps)(Login);
