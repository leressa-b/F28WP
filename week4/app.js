var apiKey = 'c37397692c18aba624c88c57af7b1318'; 
var city = document.getElementById('cityInput').value;
var btn1 = document.getElementById("btn1");
var weatherContainer = document.getElementById("weather-info");

btn2.addEventListener("click", function() {
  if (!city.value) {
    alert("Please enter a city name!");
  }

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey);

  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      if (ourData.cod === 200) {
        renderWeather(ourData);
      } else {
        alert("City not found. Please try again.");
      }
    } else {
      alert("We connected to the server, but it returned an error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
});

function renderWeather(data) {
  var htmlString = "<p>The weather in " + data.name + " is " + data.weather[0].description + 
                   ".</br> The temperature is " + data.main.temp + "°C with a wind speed of " +
                   data.wind.speed + "m/s. <hr></p>";
  weatherContainer.insertAdjacentHTML('beforeend', htmlString);
}