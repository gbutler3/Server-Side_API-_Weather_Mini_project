var searchInput = $(".search");
var submitbtn = $(".submitbtn");

submitbtn.on("click", function(e) {
    e.preventDefault();
    if (searchInput.val() === "") {
        alert("You must enter a city");
        return;
    }
    console.log("clicked button")
    weatherpage(searchInput.val());
});

function weatherpage (){
    console.log ("weatherpage")
}