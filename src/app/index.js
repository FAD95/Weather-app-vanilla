import('./styles/index.css')
import { Weather } from './Weather'
import { UI } from './UI'
import { Store } from './Store'

const store = new Store()
const { city, countryCode } = store.getLocationData()

const ui = new UI()

const weather = new Weather(city, countryCode)

function getWeatherData(data) {  
  ui.render(JSON.parse(data))
}

function fetchWeather() {
  weather.getWeather(getWeatherData)
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  e.preventDefault()
  const city = document.getElementById('city').value
  const countryCode = document.getElementById('countryCode').value
  weather.changeLocation(city, countryCode)
  store.setLocationData(city, countryCode)
  fetchWeather()
})

document.addEventListener('DOMContentLoaded', fetchWeather)
