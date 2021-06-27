var searchInput = $(".search");
var submitbtn = $(".submitbtn");

//variables for current day
var cityNameEl = document.querySelector(".city-name");
var temperatureEl = document.querySelector(".temperature");
var windEl= document.querySelector(".wind");
var humidityEl= document.querySelector(".humidity");
var uvIndexEl= document.querySelector(".uvIndex");

//variables for forcast
var card1= document.getElementById("#card1")
var forecastdate= document.querySelector(".box-date")
var forecasttemp= document.querySelector(".box-temperature")
var forecastwind= document.querySelector(".box-wind")
var forcasthumidity= document.querySelector(".box-humidity")

submitbtn.on("click", function(){
console.log("button Clicked")

//this url gets the city, temp, wind, humidity, lat, and lon
fetch('http://api.openweathermap.org/data/2.5/weather?q='+ searchInput.val()+
'&units=imperial&appid=4774555034df98f9c59d9ec59b6ebf72')
    .then(response => response.json())
    .then(data => {
        var cityvalue = data['name'];
        //console.log(cityvalue)
        var temperaturevalue = 'Temperature: ' + data['main']['temp'] + '°F';
        //console.log(temperaturevalue)
        var windvalue ='Wind: ' + data['wind']['speed'] + " MPH";
        //console.log(windvalue)
        var humidityvalue='Humidity: ' + data['main']['humidity'] + ' %';
        //console.log(humidityvalue)
        var iconvalue= ''
        var latvalue = data['coord']['lat'];
        //console.log(latvalue)
        var lonvalue = data['coord']['lon'];
        //console.log(data)

        //display current day in html
        cityNameEl.innerHTML = cityvalue;
        temperatureEl.innerHTML = temperaturevalue;
        windEl.innerHTML = windvalue;
        humidityEl.innerHTML = humidityvalue;

        latvalue;
        lonvalue;
        // console.log(data)
        forecastdate.innerHTML= cityvalue;
        forecasttemp.innerHTML=temperaturevalue;
        forecastwind.innerHTML=windvalue;
        forcasthumidity.innerHTML=humidityvalue;

//this takes the lat and long from the one above and applies it to get the uvi for that specific city
fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+ latvalue + '&lon='+ lonvalue +'&exclude=hourly&appid=4774555034df98f9c59d9ec59b6ebf72')
.then(response => response.json())
.then(data => { 
    // console.log(data)
    var uvivalue = 'UV Index: ' + data['current']['uvi']; 

//todo: figure out why it's not setting a color
        if (data.uvivalue < 3){
            document.getElementsByClassName("uvIndex").classlist.add("green")
        } else if (data.uvivalue < 6){
            document.getElementsByClassName("uvIndex").classlist.add("yellow")
        } else if (data.uvivalue < 8){
            document.getElementsByClassName("uvIndex").classlist.add("orange")
        } else if (data.uvivalue < 10){
            document.getElementsByClassName("uvIndex").classlist.add("red")}
        // console.log(uvivalue)

uvIndexEl.innerHTML = uvivalue;

fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + searchInput.val() + '&units=imperial&appid=4774555034df98f9c59d9ec59b6ebf72')
.then(response => response.json())
.then(data => {console.log(data)

    for (i = 0; i < data.list.length; i +=8) 
    {var dtConvertion = new Date(parseInt(data.list[i].dt) * 1000)
     var date = `${dtConvertion.getMonth()}/${dtConvertion.getDate()}/${dtConvertion.getFullYear()}`
        // console.log(data.list[i])
        // console.log(dtConvertion)

        //document.getElementById(i)
        //console.log(document.getElementById(`${i}`).children)
        document.getElementById(`${i}`).children[0].innerHTML=date
        document.getElementById(`${i}`).children[1].src='https://openweathermap.org/img/wn/'+ data.list[i].weather[0].icon+ '@2x.png'
        document.getElementById(`${i}`).children[2].innerHTML='Temperature: '+ data.list[i].main.temp + '°F'
        document.getElementById(`${i}`).children[3].innerHTML= 'Wind: '+ data.list[i].wind.speed + ' MPH'
        document.getElementById(`${i}`).children[4].innerHTML= 'Humidity: ' + data.list[i].main.humidity + ' %'

        temperatureEl.innerHTML = temperaturevalue;
    }
})

//TODO: In Application it shows only data being saved and not data
localStorage.setItem(cityvalue,JSON.stringify(data));

})
});
});
