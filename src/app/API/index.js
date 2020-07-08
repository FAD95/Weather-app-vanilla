var http = new XMLHttpRequest()
var url = '/'

function getActualWeather(data, cb) {
  http.open('POST', url, true)
  http.setRequestHeader('Content-Type', 'application/json')
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //aqui obtienes la respuesta de tu peticion
      // return http.responseText
       cb(http.responseText)
    }
  }

  http.send(JSON.stringify(data))
  return http.onreadystatechange()
}

module.exports = { getActualWeather }
