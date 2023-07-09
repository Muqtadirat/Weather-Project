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
//Takes user city from search and displays in HTML class
function findCity() {
  event.preventDefault(); //prevents form submission

  const cityInput = document.querySelector("#city-input");
  const cityResult = document.querySelector(".city");

  // Set the result element's text content to the entered city name
  cityResult.textContent = cityInput.value;
}

const cityDisplay = document.querySelector("#search-form");
cityDisplay.addEventListener("submit", findCity);

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
celsiusBtn.addEventListener("click", celsiusToFahrenheit);
fahrenheitBtn.addEventListener("click", fahrenheitToCelsius);
