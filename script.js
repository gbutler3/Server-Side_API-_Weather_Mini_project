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
        var windvalue ='Wind: ' + data['wind']['speed'] + " MPH";
        var humidityvalue='Humidity: ' + data['main']['humidity'];

        var latvalue = data['coord']['lat'];
        var lonvalue = data['coord']['lon'];

        cityNameEl.innerHTML = cityvalue;
        temperatureEl.innerHTML = temperaturevalue;
        windEl.innerHTML = windvalue;
        humidityEl.innerHTML = humidityvalue;

        latvalue;
        lonvalue; 
        console.log(data)
    })

fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+ latvalue + '&lon='+ lonvalue +'&exclude=hourly&appid=4774555034df98f9c59d9ec59b6ebf72')
    .then(response2 => response2.json())
    .then(data2)
});


