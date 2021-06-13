var searchInput = $(".search");
var submitbtn = $(".submitbtn");
var priorCity=$("cities-list");

var cityNameEl = document.querySelector(".city-name");
var temperatureEl = document.querySelector(".temperature");
var windEl= document.querySelector(".wind");
var humidityEl= document.querySelector(".humidity");
var uvIndexEl= document.querySelector(".uvIndex");

submitbtn.on("click", function(){
console.log("button Clicked")
fetch('http://api.openweathermap.org/data/2.5/weather?q='+ searchInput.val()+
'&units=imperial&appid=4774555034df98f9c59d9ec59b6ebf72')
    .then(response => response.json())
    .then(data => {
        var cityvalue = data['name'];
        var temperaturevalue = 'Temperature: ' + data['main']['temp'] + '°F';
        var windvalue ='Wind: ' + data['wind']['speed'];
        var humidityvalue='Humidity: ' + data['main']['humidity'];

        cityNameEl.innerHTML = cityvalue;
        temperatureEl.innerHTML = temperaturevalue;
        windEl.innerHTML = windvalue;
        humidityEl.innerHTML = humidityvalue;
        console.log(data)
    })

.catch(err => alert("Wrong City Name!"))
});


