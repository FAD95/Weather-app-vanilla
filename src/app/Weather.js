import api from './API/'

export class Weather {
  constructor(city, countryCode) {
    this.city = city
    this.countryCode = countryCode
  }

  getWeather(cb) {
    const data = { city: this.city, countryCode: this.countryCode }
    api.getActualWeather(data, cb)
  }

  changeLocation(city, countryCode) {
    this.city = city
    this.countryCode = countryCode
  }
}

