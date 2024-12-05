window.onload = pageReady;

function pageReady() {
    var location = document.getElementById("location");
    var temperature = document.getElementById("temperature");
    var conditions = document.getElementById("conditions");

    var url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=a6433f004c17b2e8b105f7b4fa82fe9c&units=metric";


    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.responseType = "json";
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {

                var data = xhr.response;
                console.log(data);
                var Format = data.weather[0].description;
                location.innerHTML = data.name;
                temperature.innerHTML = Math.round(data.main.temp) + "&#8451;";
                conditions.innerHTML = Format.charAt(0).toUpperCase() + Format.slice(1) + ".";
            } else {
                location.innerHTML = "API call was unsuccessfull";
                console.log(xhr.status);
            }

        }
    }
}
