document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitWeather");
//function that will be called against the click of button
    submitButton.addEventListener("click", function() {
	//getting latitude value
        const latitude = document.getElementById("latitude").value;
	//getting longitude value
        const longitude = document.getElementById("longitude").value;
	//request URL with user entered lat and log
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=301c44d25c76856de96cb036a6b7b366`;
	//displaying personal data
   	 var studentInfo = document.getElementById('Personal');
    	studentInfo.textContent = 'Student ID: 200530599 | Name: Parampreet singh';
        fetch(apiUrl)
            .then(response => response.json())
		//showing fetched data
            .then(data => {
                const weatherInfo = document.getElementById("weatherInfo");
                weatherInfo.innerHTML = `
                    <p>Temperature: ${data.main.temp} K</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            })
            .catch(error => console.error("Error fetching data:", error));
    });
});