// Task 0
// Sign up for a Mapbox account and add your access token below. Remove YOUR-ACCESS-TOKEN-HERE, and put your token between the quotes
mapboxgl.accessToken = "pk.eyJ1IjoiYnJhZGxleS12aWxzYWludCIsImEiOiJjbG96Ym9iaW0wYW9tMmptcDQ3MmVzcTdzIn0.9i-JipOSqhwKkw6wTnpI2w";

// Task 1
function filterPlacesByType(typePreference) {
  // Step 1: Create a new filteredPlaces array and store it in a variable
  let filteredPlaces = []
  // Step 2: Loop through PLACES
  for (let i = 0; i < PLACES.length; i++) {
    let place = PLACES[i]

  // Step 3: If a place object's type property matches the typePreference parameter, add it to filteredPlaces
  if (place.type === typePreference) {
    filteredPlaces.push(place);
    }
  }
  // Step 4: After the loop, return filteredPlaces
  return filteredPlaces;
}

// Task 2
function createCard(place) {
  // Step 1: Create a new div element and store it in a variable
  let newDiv = document.createElement('div');
  // Step 2: Add the col class to the new div element
  newDiv.classList.add('col');
  // Step 3: Set the innerHTML of the div with a template string. It should resemble the structure shown in the readme. Interpolate the values for place.name, place.img, and place.location where needed. More info - https://wesbos.com/template-strings-html
  newDiv.innerHTML = `
  <div class = "card">
    <img src = "${place.img}" class = "card-img-tap" alt = "${place.name}">
  <div class = "card-body">
    <h5 class = "card-title">${place.name}</h5>
    <p class = "card-text">Location: ${place.location}</p>
  </div>
  </div>
  
  `
  // Step 4: Return the element
  return newDiv;
}

// Task 3
function populateRecommendationCards(filteredPlaces) {
  // Step 1: Store the DOM element with the id "recommendations" in a variable
  let recommendationsElement = document.getElementById("recommendations");
  // Step 2: Clear the "recommendations" innerHTML
  recommendationsElement.innerHTML = '';
  // Step 3: Loop through the filteredPlaces array
  for (let i = 0; i < filteredPlaces.length; i++) {
    let place = filteredPlaces[i];
  
  // Step 4: Create a card for each place using the createCard function
    let cardElement = createCard(place);
  // Step 5: Add/append each card to the recommendations DOM element
    recommendationsElement.appendChild(cardElement);
  }
}

// Task 4
function findPlaceByName(placeName) {
  // Step 1: Loop through the PLACES array
  for (let i = 0; i < PLACES.length; i++) {
    let place = PLACES[i];
  // Step 2: If a place object's name property matches the placeName parameter, return that place object
  if (place.name === placeName) {
    return place;
    }
  }
  return null;
}
