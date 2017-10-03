import { React } from 'react';
import { fetchPostsRequest, fetchPostsError, fetchPostsSuccess } from "../actions/index";

export const fetchPostsWithRedux = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) =>{
      if(response.status === 200){
        dispatch(fetchPostsSuccess(json))
      }
      else{
        dispatch(fetchPostsError())
      }
    })
  }
};

export const fetchPosts = () => {
  const URL = "http://localhost:3001/api/directions/js/js";
  return fetch(URL, { method: 'GET'})
    .then( response => Promise.all([response, response.json()]));
};
