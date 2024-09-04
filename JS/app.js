const APIkey = '80b28f1e1c084dfccbce4f965296061e';
function getWeather() {
    const city = document.getElementById('locationInput').value;
    if(!city){
        alert('Enter a location');
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`)
    .then(res => {
        return res.json();
    })
    .then(data => {
            
            const weatherInfo = document.querySelector('.weather-info');
            weatherInfo.innerHTML = '';

            const icons = document.createElement('img');
            icons.src = `/img/${data.weather[0].icon}.png`;
            weatherInfo.appendChild(icons);
             
            const location = document.createElement('p');
            location.textContent = `${data.name}`;
            weatherInfo.appendChild(location);

            const temp = document.createElement('h2');
            temp.textContent = `${data.main.temp} °C`;
            weatherInfo.appendChild(temp);

            const description = document.createElement('p');
            description.textContent = `${data.weather[0].description}`;
            weatherInfo.appendChild(description);



    })
    .catch(error => {
        console.log(error);
    });
}






