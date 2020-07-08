export class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.description = document.getElementById('w-description')
    this.string = document.getElementById('w-string')
    this.humidity = document.getElementById('w-humidity')
    this.wind = document.getElementById('w-wind')
  }
  render(weather) {      
        this.location.textContent = weather.name + ' / ' + weather.sys.country
        this.description.textContent = weather.weather[0]['description']
        this.string.textContent = weather.main.temp + ' ºC'
        this.humidity.textContent = 'Humidity: '+ weather.main.humidity + ' %'
        this.wind.textContent = 'Wind: '+weather.wind.speed+' m/s'
    }
}
