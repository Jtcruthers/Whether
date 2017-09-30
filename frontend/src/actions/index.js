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

export const addOrigin = origin => {
    return {
        type: 'ADD_ORIGIN',
        origin
    }
};

export const addDestination = destination => {
    return {
        type: 'ADD_DESTINATION',
        destination
    }
};