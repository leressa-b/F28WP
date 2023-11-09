var apiKey = c37397692c18aba624c88c57af7b1318
var inputField = document.getElementById("cityInput");
var btn = document.getElementById("btn");
var weatherInfo = document.getElementById("weather-info");
btn.addEventListener("click", function(){
    if (inputField==false) {
        alert("Enter city name");
    }
});
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', apiKey);



