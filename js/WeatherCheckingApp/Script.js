function getWeather() {
    let city = document.getElementById("city").value;
    let apiKey = "95abc5f22e961e1a0ca48974d88d99ed";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById("result").innerHTML = "City not found";
                return;
            }

            document.getElementById("result").innerHTML = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(() => {
            document.getElementById("result").innerHTML = "Error fetching data";
        });
}
