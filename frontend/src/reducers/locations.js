const locations = (state = {origin: null, destination: null}, action) => {
  switch (action.type) {
    case 'EDIT_ORIGIN':
      return Object.assign({}, state,
        {origin: action.origin}
      )
    case 'EDIT_DESTINATION':
      return Object.assign({}, state,
        {destination: action.destination}
      )
    default:
      return state
  }
}

export default locations;