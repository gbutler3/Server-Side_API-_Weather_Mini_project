var searchInput = $(".search");
var submitbtn = $(".submitbtn");

var cityNameEl = document.getElementsByClassName(".city-name");
var temperatureEl = document.getElementsByClassName(".temperature");
var windEl= document.getElementsByClassName(".wind");
var humidityEl= document.getElementsByClassName(".humidity");
var uvIndexEl= document.getElementById(".uvIndex");

submitbtn.on("click", function(e) {
    e.preventDefault();
    if (searchInput.val() === "") {
        alert("You must enter a city");
        return;
    }
    console.log("clicked button")
    
    weatherAsk(searchInput.val());
});

function weatherAsk(){
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var apikey = "&APPID=4774555034df98f9c59d9ec59b6ebf72";
    var units= "&units=imperial";
    var city= $("#search-city").val().trim();
    var url =api + city + apikey + units;
    console.log(url);
}


