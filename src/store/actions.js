import { Storage } from '../services/storageService';

import SpotifyWebApi from 'spotify-web-api-js';
const spotify = new SpotifyWebApi();

export const loadUser = () => async (dispatch) => {
  try {
    let token = Storage.loadFromStorage('token');
    let user = Storage.loadFromStorage('user');
    let playlists = Storage.loadFromStorage('playlists');
    let playlist = Storage.loadFromStorage('playlist');
    if (!token || !user) return;
    dispatch({
      type: 'SET_LOGGED_IN_USER',
      payload: { user, token, playlists, playlist },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getLoggedInUser = (token) => async (dispatch) => {
  try {
    spotify.setAccessToken(token);
    spotify.getMe().then((user) => {
      Storage.storeToStorage('token', token);
      Storage.storeToStorage('user', user);
      dispatch({ type: 'SET_LOGGED_IN_USER', payload: { user, token } });
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUserPlaylists = (token) => async (dispatch) => {
  try {
    spotify.setAccessToken(token);
    spotify.getMe().then((user) => {
      spotify.getUserPlaylists().then((playlists) => {
        Storage.storeToStorage('playlists', playlists);
        dispatch({
          type: 'SET_PLAYLISTS',
          payload: playlists,
        });
      });
    });
  } catch {}
};

export const getUserPlaylist = (id) => async (dispatch) => {
  try {
    spotify.getPlaylist(id).then((playlist) => {
      Storage.storeToStorage('playlist', playlist);
      dispatch({ type: 'SET_PLAYLIST', payload: playlist });
    });
  } catch (err) {
    console.log(err);
  }
};

export const setPlaying = (id) => async (dispatch) => {
  try {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: 'SET_ITEM',
            payload: r.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            payload: true,
          });
        });
      });
  } catch (err) {
    console.log(err);
  }
};

export const setPlayPlaylist = (id) => async (dispatch) => {
  console.log(id);
  try {
    spotify
      .play({
        context_uri: `spotify:playlist:${id}`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: 'SET_ITEM',
            payload: r.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            payload: true,
          });
        });
      });
  } catch (err) {
    console.log(err);
  }
};
