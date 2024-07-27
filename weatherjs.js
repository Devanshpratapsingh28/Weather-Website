const apikey = "6387c0f728d45a1a2d1f2959cef25678";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        let cityElement = document.querySelector("#div-2-3");
        let temperatureElement = document.querySelector("#div-2-2");
        let windspeedElement = document.querySelector("#windspeed");
        let humidityElement = document.querySelector("#humidity");
        let searchButton = document.querySelector("#div-1-2");
        let inputBox = document.querySelector("#div-1-1");
        let weathericon=document.querySelector("#div-2-1 img");

        async function checkWeather(city) {
            try {
                const response = await fetch(apiurl + city + `&appid=${apikey}`);
                if (!response.ok) {
                    throw new Error("City not found");
                }
                const data = await response.json();

                cityElement.textContent = data.name;
                temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
                windspeedElement.textContent = `${data.wind.speed} km/h`;
                humidityElement.textContent = `${data.main.humidity}%`;

                let val=data.weather[0].main;
                weathericon.src='clouds.png';
                if(val==='Clouds'){
                    weathericon.src="imagesicon/clouds.png";
                    document.body.style.backgroundImage = "url('backgroundimages/cloudsback.jpg')"; 
                }
                else if(val==='Rain'){
                    weathericon.src='imagesicon/rain.png';
                    document.body.style.backgroundImage = "url('backgroundimages/rainback.jpg')"; 
                }
                else if(val==='Drizzle'){
                    weathericon.src='imagesicon/drizzle.png';
                    document.body.style.backgroundImage = "url('backgroundimages/drizzleback.jpg')"; 
                }
                else if(val==='Mist'){
                    weathericon.src='imagesicon/mist.png';
                    document.body.style.backgroundImage = "url('backgroundimages/mistback.jpg')"; 
                }
                else if(val==='Snow'){
                    weathericon.img.src='imagesicon/snow.png';
                    document.body.style.backgroundImage = "url('backgroundimages/snowback.jpg')"; 
                }
                else {
                    weathericon.src='imagesicon/clear.png';
                    document.body.style.backgroundImage = "url('backgroundimages/clearback.jpg')"; 
                }


            } catch (error) {
                console.error("Error fetching weather data:", error);
                alert("City not found. Please enter a valid city name.");
            }
        }
           
          
        searchButton.addEventListener("click", () => {
            checkWeather(inputBox.value);
        });

        // Default city to Jaunpur
        checkWeather("Jaunpur");

