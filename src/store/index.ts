import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {watchFetchWeeklyWeather} from './sagas/weeklyWeatherSaga';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {weeklyWeatherReducer} from './reducers/weeklyWeatherReducer';

const saga = createSagaMiddleware();

export const rootReducer = combineReducers({
  weeklyWeather: weeklyWeatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const middlewares = [saga];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

saga.run(watchFetchWeeklyWeather);
