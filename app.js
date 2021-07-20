let btn = document.getElementById("btn");
var img = document.getElementById('img');
document.getElementById("bottomImg").appendChild(img);
img.src = "./images/weather.png";


btn.addEventListener("click", function () {

    const apiKey = "4eae610b61779457de77bc9f6aaf8f22";
    let city = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=imperial&appid=${apiKey}`, {
        mode: "cors",
    })
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);
        const location = response.list[0].name;
        const temperature = response.list[0].main.temp;
        const description = response.list[0].weather[0].description;
        const wind = response.list[0].wind.speed;
        const icon = response.list[0].weather[0].icon;
        document.getElementById("header").textContent = `Weather for ${location}:`;
        document.getElementById("temp").textContent = `The current temperature is ${temperature.toFixed(1)}°F`;
        document.getElementById("description").textContent = `${description}`;
        document.getElementById("wind").textContent = `Wind speed: ${wind.toFixed(1)}mph`;
        console.log(location, temperature, wind, description, icon);
        var img = document.getElementById('img');
        img.src =`./images/${icon}.png`;
        document.getElementById("bottomImg").appendChild(img);
        document.getElementById("city").value = "";
    })
    .catch((error) => {
        document.write(error);
    })
})