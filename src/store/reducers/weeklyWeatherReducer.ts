import {WeeklyWeatherTypes} from '../enums';

const initialState = {
  list: [],
};

export const weeklyWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WeeklyWeatherTypes.SAVE_WEEKLY_WEATHER: {
      return {
        ...state,
        list: action.payload,
      };
    }

    default:
      return state;
  }
};
