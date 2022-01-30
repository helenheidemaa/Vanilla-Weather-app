//Calculate the date
function formatDate(timestamp){
let date = new Date (timestamp);
let hours = date.getHours();
 if (hours <10){
          hours =`0${hours}`;
}
let minutes = date.getMinutes();

 if (minutes <10){
          minutes =`0${minutes}`;
}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()]; 
return `${day} ${hours}:${minutes}`;

}


function displayTemperature(response){
   // console.log(response.data);
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
let dateElement = document.querySelector("#date");
dateElement.innerHTML= formatDate(response.data.dt * 1000);
let iconElement = document.querySelector("#icon");
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(city){
let apiKey = "f4e2e7d1dd4f9ad7bc54617b19362453";
let units = `metric`;
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(displayTemperature)
}


function handleSubmit(event){
event.preventDefault();
let cityinputElement =document.querySelector("#city-input");
search(cityinputElement.value)
console.log(cityinputElement.value);
}

function displayFtemperature(event){
    event.preventDefault();
    let ftemperature= (14 * 9)/5+32;
    alert(ftemperature);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML=Math.round(ftemperature);

}

search("New York");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit)

let fLink=document.querySelector("#F-link");
fLink.addEventListener("click", displayFtemperature);