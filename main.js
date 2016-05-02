
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
	var cardsHTML = "";
	for (var i = 0; i < dataArray.length; i++) {
		var current = dataArray[i];
		cardsHTML += "<article class='card'>" +
								 "<header class='card-header'>" +
								 "<h3>" + current.name + "</h3>" + "</header>" +
								 "<div class='card-body'>";
		 for (var t = 0; t < current.types.length; t++) {
		 	cardsHTML += "<section class='type'>" +
									 "<p>" + current.types[t].type + "<p>";
				for (var v = 0; v < current.types[t].volumes.length; v++) {
					 cardsHTML += "<p>" + current.types[t].volumes[v].name + "</p>" +
					 							"<p>" + current.types[t].volumes[v].price + "<p>";
					}
		 cardsHTML += "</section>"
		 }

		cardsHTML += "</div></article>";
 	}
 	outputDiv.innerHTML += cardsHTML;
}

// Create a function that formats cat cards

function buildCatCards(dataArray) {
	var cardsHTML = "";
	for (var i = 0; i < dataArray.length; i++) {
		var current = dataArray[i];
		cardsHTML += "<article class='card'>" +
								 "<header class='card-header'>" +
								 "<h3>" + current.name + "</h3>" + "</header>" +
								 "<div class='card-body'>" +
								 "<h4>" + current.breeds + "</h4>";
		 for (var t = 0; t < current.types.length; t++) {
		 	cardsHTML += "<section class='type'>" +
	  							 "<p>" + current.types[t].type + "<p>";
				for (var v = 0; v < current.types[t].volumes.length; v++) {
					 cardsHTML += "<p>" + current.types[t].volumes[v].name + "</p>" +
					 							"<p>" + current.types[t].volumes[v].price + "<p>";
					}
		 cardsHTML += "</section>"
		 }

		cardsHTML += "</div></article>";
 	}
 	outputDiv.innerHTML += cardsHTML;
}

// Create a function that parses data and prints to the DOM
function printDogCards() {
	var dataDogFood = JSON.parse(this.responseText);
	buildDogCards(dataDogFood.dog_brands);
}

// Create a function that parses the data for cats.json and prints to the DOM

function printCatCards() {
	var dataCatFood = JSON.parse(this.responseText);
	buildCatCards(dataCatFood.cat_brands);
}

