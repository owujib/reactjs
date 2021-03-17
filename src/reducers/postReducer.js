const initialState = {
  posts: [],
  err: {},
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_POST':
      return {
        posts: action.payload,
        ...state,
      };
    case 'FECTCH_POST_ERR':
      return {
        err: action.payload,
        ...state,
      };
    default:
      return state;
  }
}
