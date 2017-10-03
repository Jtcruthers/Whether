let nextForecastId = 0;
export const addForecast = conditions => {
  return {
    type: 'ADD_FORECAST',
    id: nextForecastId,
    conditions
  }
};

export const editForecast = (id, conditions) => {
  return {
    type: 'EDIT_FORECAST',
    id,
    conditions
  }
};

export const editOrigin = origin => {
  return {
    type: 'EDIT_ORIGIN',
    origin
  }
};

export const editDestination = destination => {
  return {
    type: 'EDIT_DESTINATION',
    destination
  }
};

export const toggleSubmitted = id => {
  return {
    type: 'TOGGLE_SUBMITTED',
    id
  }
};

export const fetchPostsRequest = () => {
  return {
    type: "FETCH_REQUEST"
  }
};

export const fetchPostsSuccess = payload => {
  return {
    type: "FETCH_SUCCESS",
    payload
  }
};

export const fetchPostsError = () => {
  return {
    type: "FETCH_ERROR"
  }
};