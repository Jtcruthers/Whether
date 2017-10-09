const defaultState = {
  rawData: null,
  fetched: false,
  directions: [],
  breakLocations: []
};

const api = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return state;
    case 'FETCH_SUCCESS':
      const directions = action.payload.directions;
      const breakLocations = action.payload.breakLocations;
      return {
        ...state,
        rawData: action.payload,
        fetched: true,
        directions,
        breakLocations
      };
    default:
      return state;
  }
}

export default api;