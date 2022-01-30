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
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windspeedElement = document.querySelector("#wind-speed");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

Ctemperature =  response.data.main.temp;

temperatureElement.innerHTML= Math.round(response.data.main.temp);
cityElement.innerHTML= response.data.name;
descriptionElement.innerHTML= response.data.weather[0].description;
humidityElement.innerHTML= response.data.main.humidity;
windspeedElement.innerHTML= Math.round(response.data.wind.speed);
dateElement.innerHTML= formatDate(response.data.dt * 1000);
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
    let temperatureElement = document.querySelector("#temperature");
    cLink.classList.remove("active");
    fLink.classList.add("active");
    let ftemperature= (Ctemperature * 9)/5+32;
    temperatureElement.innerHTML=Math.round(ftemperature);
}

function displayCtemperature(event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    cLink.classList.add("active");
    fLink.classList.remove("active");
    temperatureElement.innerHTML=Math.round(Ctemperature);
}

let Ctemperature = null;


let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit)

let fLink=document.querySelector("#F-link");
fLink.addEventListener("click", displayFtemperature);

let cLink=document.querySelector("#C-link");
cLink.addEventListener("click", displayCtemperature);

search("New York");