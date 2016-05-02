
// Capture output div
var outputDiv = document.getElementById("products");

// Create a request for data from dogs.json
var requestDogs = new XMLHttpRequest();
requestDogs.addEventListener("load", printDogCards);
requestDogs.open("GET", "dogs.json");
requestDogs.send();

// Create a request for cats.json
var requestCats = new XMLHttpRequest();
requestCats.addEventListener("load", printCatCards);
requestCats.open("GET", "cats.json");
requestCats.send();

// Create a function that formats dog cards
function buildDogCards(dataArray) {
	for (var i = 0; i < dataArray.length; i++) {
		var current = dataArray[i];
		outputDiv.innerHTML += "<article class='card'>" +
													 "<header class='card-header'>" +
													 "<h3>" + current.name + "</h3>" + "</header>" +
													 "<div class='card-body'>" +
													 "<p>" + current.types[0].type + "<p>" +
													 "<p>" + current.types[0].volumes[0].name + "</p>" +
													 "<p>" + current.types[0].volumes[0].price + "<p>" +
													 "</div></article>" +
													 "<article class='card'>" +
													 "<header class='card-header'>" +
													 "<h3>" + current.name + "</h3>" + "</header>" +
													 "<div class='card-body'>" +
													 "<p>" + current.types[1].type + "<p>" +
													 "<p>" + current.types[1].volumes[1].name + "</p>" +
													 "<p>" + current.types[1].volumes[1].price + "<p>" +
													 "</div></article>";
 	}
}

// Create a function that formats cat cards

function buildCatCards(dataArray) {
	for (var i = 0; i < dataArray.length; i++) {
		var current = dataArray[i];
		outputDiv.innerHTML += "<article class='card'>" +
													 "<header class='card-header'>" +
													 "<h3>" + current.name + "</h3>" + "</header>" +
													 "<div class='card-body'>" +
													 "<h4>" + current.breeds + "</h4>" +
													 "<p>" + current.types[0].type + "<p>" +
													 "<p>" + current.types[0].volumes[0].name + "</p>" +
													 "<p>" + current.types[0].volumes[0].price + "<p>" +
													 "</div></article>" +
													 "<article class='card'>" +
													 "<header class='card-header'>" +
													 "<h3>" + current.name + "</h3>" + "</header>" +
													 "<div class='card-body'>" +
													 "<p>" + current.types[1].type + "<p>" +
													 "<p>" + current.types[1].volumes[1].name + "</p>" +
													 "<p>" + current.types[1].volumes[1].price + "<p>" +
													 "</div></article>";
 	}
}

// Create a function that parses data and prints to the DOM
function printDogCards() {
	var dataDogFood = JSON.parse(this.responseText);
	console.log("dataDogFood: ", dataDogFood);
	buildDogCards(dataDogFood.dog_brands);
}

// Create a function that parses the data for cats.json and prints to the DOM

function printCatCards() {
	var dataCatFood = JSON.parse(this.responseText);
	console.log("dataCatFood: ", dataCatFood);
	buildCatCards(dataCatFood.cat_brands);
}

