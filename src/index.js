function displayTemperature(response){
console.log(response.data.name)
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML= Math.round(response.data.main.temp);
let cityElement = document.querySelector("#city");
cityElement.innerHTML= response.data.name;
let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML= response.data.weather[0].description;
let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML= response.data.main.humidity;
let windspeedElement = document.querySelector("#wind-speed");
windspeedElement.innerHTML= Math.round(response.data.wind.speed);
}



let apiKey = "f4e2e7d1dd4f9ad7bc54617b19362453";
let city= `Tallinn`;
let units = `metric`;
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature)


