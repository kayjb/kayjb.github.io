 var greenvilleRequestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=98046&appid=0f8a492064dd4945acba6376140eaf70&units=imperial';
        var greenvilleRequest = new XMLHttpRequest();
        greenvilleRequest.open('GET', greenvilleRequestURL);
        greenvilleRequest.responseType = 'json';
        greenvilleRequest.send();
        
        greenvilleRequest.onload = function() {          
            
            var greenvilleWeather = greenvilleRequest.response;
            
            var greenvilleImagesrc = 'https://openweathermap.org/img/w/' + greenvilleWeather.weather[0].icon + '.png';
            
            document.getElementById('icon').src = greenvilleImagesrc;
            
            document.getElementById("high-temp").innerHTML = "  " + greenvilleWeather.main.temp_max;
            
            document.getElementById("low-temp").innerHTML = "  " + greenvilleWeather.main.temp_min;
            
            document.getElementById("current-temp").innerHTML = "  " + greenvilleWeather.main.temp;
            
            document.getElementById("condition").innerHTML = "  " + greenvilleWeather.weather[0].description;            

            document.getElementById("windspeed").innerHTML = "  " + greenvilleWeather.wind.speed;            
            
        }