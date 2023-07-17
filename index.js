//FEATURE 1
//Get the current date and time
const now = new Date();

//Get the weekday
function getWeekDay() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][now.getDay()];

  return weekday;
}

//Get the time
function getTime() {
  const hour = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0"); //Ensures minutes starts with a leading zero i.e 12:01 not 12:1

  return `${hour}:${minutes}`;
}

//Insert the current weekday into the HTML class
function currDay() {
  const day = document.querySelector(".day");
  day.innerHTML = getWeekDay();
}

//Insert the current time into the HTML class
function currTime() {
  const time = document.querySelector(".time");
  time.innerHTML = getTime();
}

//Call the functions
currDay();
currTime();

//FEATURE 2
// Takes user city from search and displays in HTML class
function findCity(event) {
  event.preventDefault(); // Prevents form submission

  const cityInput = document.querySelector("#city-input");
  const cityResult = document.querySelector(".city");

  // Set the result element's text content to the entered city name
  const cityName =
    cityInput.value.charAt(0).toUpperCase() + cityInput.value.slice(1);
  cityResult.textContent = cityName;

  // Gets city temperature via API
  const apiKey = "b40b135798f82a05aed08769f9275f50";
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

  axios.get(weatherApi).then(displayWeatherCondition);
}

// Displays weather conditions in the HTML elements
function displayWeatherCondition(response) {
  const cityName = document.querySelector(".city");
  const temperatureValue = document.querySelector("#temperature-value");
  const atmosphere = document.querySelector("#atmosphere");

  cityName.innerHTML = response.data.name;
  temperatureValue.innerHTML = Math.round(response.data.main.temp);
  atmosphere.innerHTML = response.data.weather[0].main;
}

// Gets weather conditions for current location
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(gpsLocation);
}

// Retrieves weather conditions based on geolocation coordinates
function gpsLocation(position) {
  const apiKey = "b40b135798f82a05aed08769f9275f50";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

// Event listeners
const cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", findCity);

const currentLocationButton = document.querySelector("#gps-location");
currentLocationButton.addEventListener("click", getCurrentLocation);

// Initialize with weather conditions for current location
navigator.geolocation.getCurrentPosition(gpsLocation);

//BONUS FEATURE
//Converts celsius to fahrenheit and vice versa

const temperatureValue = document.querySelector("#temperature-value");
const celsiusBtn = document.querySelector(".celsius");
const fahrenheitBtn = document.querySelector(".fahrenheit");

//Button to convert celsius to fahrenheit
function celsiusToFahrenheit() {
  const celsiusTemp = parseFloat(temperatureValue.textContent);

  //Calculates the fahrenheit temperature
  const fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;

  // Updates the temperature value with the Fahrenheit temperature
  temperatureValue.textContent = Math.round(fahrenheitTemp);
}

//Button to convert fahrenheit to celsius
function fahrenheitToCelsius() {
  const fahrenheitTemp = parseFloat(temperatureValue.textContent);

  //Calculates the celsius temperature
  const celsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;

  // Updates the temperature value with the Celsius temperature
  temperatureValue.textContent = Math.round(celsiusTemp);
}

// Event listeners for the conversion buttons
celsiusBtn.addEventListener("click", fahrenheitToCelsius);
fahrenheitBtn.addEventListener("click", celsiusToFahrenheit);
