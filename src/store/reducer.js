const initialState = {
  token: null,
  user: null,
  playlists: [],
  playlis: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOGGED_IN_USER':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        playlists: action.payload.playlists,
        playlist: action.payload.playlist,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.payload,
      };
    case 'SET_PLAYLIST':
      return {
        ...state,
        playlist: action.payload,
      };
    default:
      return state;
  }
}
