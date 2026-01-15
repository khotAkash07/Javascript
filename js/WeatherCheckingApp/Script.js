const apiKey = "bbde1f798ff8643659db8f922b2a38c1"; // Ensure this is active and verified
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 401) {
        alert("Invalid API Key or Key not yet active.");
    } else if (response.status === 404) {
        alert("City not found.");
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".description").innerHTML = data.weather[0].description;
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value).then(r => {});
});