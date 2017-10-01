const submitted = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SUBMITTED':
      return !state;
    default:
      return state
  }
};

export default submitted;