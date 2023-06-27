let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

function fahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function forecast() {
  let city = prompt("Enter a city");
  city = city.toLowerCase().trim();

  if (weather.hasOwnProperty(city)) {
    let forecastWeather = weather[city];
    alert(
      `It is currently ${Math.round(forecastWeather.temp)}°C (${Math.round(
        fahrenheit(forecastWeather.temp)
      )}°F) in ${city} with a humidity of ${forecastWeather.humidity}%`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${city}`
    );
  }
}

forecast();