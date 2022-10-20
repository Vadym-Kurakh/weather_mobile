import moment from 'moment';
import {WeeklyWeatherTypes} from '../enums';
import {DataProvider} from '../../utils/WeavrApiClient';
import {saveWeeklyWeather} from '../actions/weeklyWeatherActions';
import {call, put, SagaReturnType, takeEvery} from 'redux-saga/effects';

function* workerFetchWeeklyWeather(): any {
  try {
    const data: SagaReturnType<typeof DataProvider.fetchWeeklyWeather> =
      yield call(() => DataProvider.fetchWeeklyWeather());

    let resulrArr: any[] = [];
    data?.list?.map(el => {
      const title = moment(el.dt_txt).format('dddd');
      const index = resulrArr.findIndex(item => item?.title === title);
      if (index === -1) {
        resulrArr.push({title, data: [el]});
      } else {
        resulrArr[index].data.push(el);
      }
    });

    yield put(saveWeeklyWeather(resulrArr));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchWeeklyWeather() {
  yield takeEvery(
    WeeklyWeatherTypes.FETCH_WEEKLY_WEATHER,
    workerFetchWeeklyWeather,
  );
}
