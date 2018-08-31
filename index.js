const API_KEY = "2ebc925e2db00c5cb1c4ae9008a12475"

function handleFormSubmit(event) {
  //handle submit event
  console.log("== handleFormSubmit ==")
  event.preventDefault();
  let city = document.getElementById("city").value;
  console.log("city:", city);
  fetchCurrentWeather(city);
  
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city. Call a function and pass a variable to it. Receive city by having it passsed to it.

    console.log("== fetchCurrentWeather ==")

    // ======= get weather data by city name =======
    let weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
    weatherUrl += city;
    weatherUrl += "&APPID=";
    weatherUrl += API_KEY;
    console.log("weatherUrl:", weatherUrl);

    fetch(weatherUrl)
      .then( (weatherData) => {
          console.log("== then1 ==");
          return weatherData.json()
      })
      .catch( error => {
        console.log("== catch1 ==");
        console.error(`Oh no! ${error}`);
      })
      .then( weatherJson => {
        console.log("== then2 ==");
        return weatherJson
      })
      .catch( error => {
        console.log("== catch2 ==");
        console.error(`Ruh-roh! Couldn't convert the json: ${error}`)
      })
      .then( weatherJson => {
        console.log("== then3 ==");
        displayCurrentWeather(weatherJson);
      })
}

function displayCurrentWeather(weatherJson) {
    console.log("== displayCurrentWeather ==")
    //render current weather data to the DOM using provided IDs and json from API
    console.log("weatherJson:", weatherJson);
    console.log("WeatherJson.name:", weatherJson.name);
    console.log("WeatherJson.main:", weatherJson.main);
    console.log("WeatherJson.main.temp:", weatherJson.main.temp);
   
}
  

function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  
  console.log("city:", city);
  console.log("city.temp:", city.temp);
  console.log("city.temp.low:", city.temp.low);
  console.log("city.temp.high:", city.temp.high);
  console.log("city.humidity:", city.humidity);
  console.log("city.cloudCover:", city.cloudCover);
  console.log("city.sunrise:", city.sunrise);
  console.log("city.sunset:", city.sunset);
  

  
  
  
  
  
  
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  
  console.log("-- DOMContentLoaded --")
  
  document.getElementById("submitBtn") .addEventListener("click", handleFormSubmit)
  
})
