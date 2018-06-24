var weatherRequest = new XMLHttpRequest();
var apiURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
weatherRequest.open('get', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
  var weatherData = JSON.parse(weatherRequest.responseText);

  
  var i;
  for (i = 0; i < weatherData.towns.length; i++) {

      if (i == 2){
          i=i+1;
      }
     document.getElementsByClassName('name')

    [i].innerHTML = weatherData.towns[i].name;
    document.getElementsByClassName('motto')[i].innerHTML = weatherData.towns[i].motto;
    document.getElementsByClassName('yearFounded')[i].innerHTML = weatherData.towns[i].yearFounded;
    document.getElementsByClassName('currentPopulation')[i].innerHTML = weatherData.towns[i].currentPopulation;
    document.getElementsByClassName('averageRainfall')[i].innerHTML = weatherData.towns[i].averageRainfall;

  }



}