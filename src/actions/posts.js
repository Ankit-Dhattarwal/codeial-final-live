import { UPDATE_POSTS } from './actionTypes';
import { APIURls } from '../helpers/url';
export function fetchPosts() {
  return (dispatch) => {
    const url = APIURls.fetchPosts;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
