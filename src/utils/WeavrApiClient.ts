import axios, {AxiosRequestConfig, AxiosInstance} from 'axios';

class ApiClient {
  baseURL = 'https://api.openweathermap.org/data/2.5/';
  fetchWeeklyWeatherPath =
    'forecast?lat=49.841952&lon=24.0315921&appid=dfaae20014880d62c149f0af3c89cc27&units=metric';

  sendRequest = async ({url, method, data, params}: AxiosRequestConfig) => {
    let instanse: AxiosInstance;
    let result;

    const headers = {
      'content-type': 'application/json',
      responseType: 'text',
    };

    try {
      instanse = axios.create({
        baseURL: this.baseURL,
        headers,
        data,
        params,
      });

      result = await instanse[method](url, data);
    } catch (error: any) {
      throw new Error(error?.request);
    }
    return result?.data;
  };

  fetchWeeklyWeather(): Promise<any> {
    return this.sendRequest({
      url: this.fetchWeeklyWeatherPath,
      method: 'post',
    });
  }
}

export const DataProvider = new ApiClient();
