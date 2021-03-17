import axios from 'axios';

export const getPosts = () => {
  return (dispatch) => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return dispatch({
          type: 'FETCH_POST',
          payload: res.data,
        });
      })
      .catch((err) => {
        return dispatch({
          type: 'FETCH_POST_ERR',
          payload: err.response,
        });
      });
  };
};
