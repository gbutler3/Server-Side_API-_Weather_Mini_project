var searchInput = $(".search");
var submitbtn = $(".submitbtn");

//variables for current day
var cityNameEl = document.querySelector(".city-name");
var temperatureEl = document.querySelector(".temperature");
var windEl= document.querySelector(".wind");
var humidityEl= document.querySelector(".humidity");
var uvIndexEl= document.querySelector(".uvIndex");


//variables for forcast
var forecastdate= document.querySelector(".box-date")
var forecasttemp= document.querySelector(".box-temperature")
var forcasthumidity= document.querySelector(".box-humidity")

submitbtn.on("click", function(){
console.log("button Clicked")

function today(){
    var todayEl = moment().format('dddd, MMM Do YYYY')
}

//this url gets the city, temp, wind, humidity, lat, and lon
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
        
        //display current day in html
        cityNameEl.innerHTML = cityvalue;
        temperatureEl.innerHTML = temperaturevalue;
        windEl.innerHTML = windvalue;
        humidityEl.innerHTML = humidityvalue;

        //todo: display forecast in html.. how to get additional days and the picture
        forecastdate.innerHTML= cityvalue;
        forecasttemp.innerHTML=temperaturevalue;
        forcasthumidity.innerHTML=humidityvalue;

        latvalue;
        lonvalue;
        console.log(data)

//this takes the lat and long from the one above and applies it to get the uvi for that specific city
fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+ latvalue + '&lon='+ lonvalue +'&exclude=hourly&appid=4774555034df98f9c59d9ec59b6ebf72')
.then(response2 => response2.json())
.then(data2 => { 
    console.log(data2)
    var uvivalue = 'UV Index: ' + data2['current']['uvi']; 

//todo: figure out why it's not setting a color
        if (uvivalue.data2 < 3){
            document.getElementsByClassName("uvIndex").classlist.add("green")
        } else if (uvivalue.data2 < 6){
            document.getElementsByClassName("uvIndex").classlist.add("yellow")
        } else if (uvivalue.data2 < 8){
            document.getElementsByClassName("uvIndex").classlist.add("orange")
        } else if (uvivalue.data2 < 10){
            document.getElementsByClassName("uvIndex").classlist.add("red")
        }

uvIndexEl.innerHTML = uvivalue;


//TODO: In Application it shows only data being saved and not data2
localStorage.setItem(cityvalue,JSON.stringify(data, data2));

})
});
});
