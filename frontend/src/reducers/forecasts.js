
const forecasts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FORECAST':
            return [
                ...state,
                {
                    id: action.id,
                    conditons: action.conditions,
                }
            ]
        case 'EDIT_FORECAST':
            return state.map(forecast =>
                (forecast.id === action.id)
                    ? {...forecast, conditions: action.conditions}
                    : forecast
            )
        default:
            return state
    }
}

export default forecasts