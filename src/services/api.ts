import axios from "axios";


const API_KEY = "8d2a110b6ad468ae1a0e459757cf659d";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city: string, country: string) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: `${city},${country}`,
        appid: API_KEY,
        units: "metric",
      },
      paramsSerializer: (params) => {
        return Object.entries(params)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
          .join("&");
      },
    });
    return response.data;
  } catch (error: any) {
    console.log("Error", error.message);
    return error.response;
  }
};
