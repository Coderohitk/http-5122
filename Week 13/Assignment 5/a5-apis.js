// Event handler for when the page loads
window.onload = pageReady;

function pageReady() {
    // Selecting elements from the DOM for displaying weather data
    var toronto = document.getElementById("Toronto");
    var alberta = document.getElementById("Alberta");
    var location = document.getElementById("location");
    var output = document.getElementById("output");
    var icon = document.getElementById("icon");
    var temperature = document.getElementById("temperature");
    var conditions = document.getElementById("conditions");
    var Feelslike = document.getElementById("Feelslike");

    // Function to fetch weather data for a given city using OpenWeather API
    function getWeather(city) {
        // API URL with the city name and API key
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a6433f004c17b2e8b105f7b4fa82fe9c&units=metric`;

        // Creating a new XMLHttpRequest object to send the request to the server
        var xhr = new XMLHttpRequest();

        // Initializing the GET request to the API endpoint
        xhr.open('GET', url, true);

        // Specifying the response type as JSON
        xhr.responseType = "json";


        xhr.send(null);

        // Event listener that triggers when the request state changes
        xhr.onreadystatechange = function () {
            // Checking if the request has completed (readyState 4) and if it was successful (status 200)
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // If the request was successful, parse the response and update the UI with the weather data
                    var data = xhr.response;
                    console.log(data);

                    // Format the weather condition description for better readability
                    var Format = data.weather[0].description;

                    // Display the weather data in the respective elements
                    output.style.display = "block";
                    location.innerHTML = data.name;  // Display city name
                    temperature.innerHTML = Math.round(data.main.temp) + "&#8451;";
                    // Capitalize first letter of description
                    conditions.innerHTML = Format.charAt(0).toUpperCase() + Format.slice(1) + ".";
                    Feelslike.innerHTML = Math.round(data.main.feels_like) + "&#8451;";
                    icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">`;  // Display weather icon
                } else {
                    // If the request fails, call the error handling function
                    var error = document.getElementById("error");
                    output.style.display = "block";
                    error.innerHTML = "There is an issue with the API from which we are getting the data. Sorry for the inconvenience.";
                    error.style.display = "block";
                }
            }
        }
    }

    // Event listeners for the buttons to fetch weather for Toronto and Alberta
    toronto.onclick = function () { getWeather("Toronto"); }
    alberta.onclick = function () { getWeather("Alberta"); }
}
