// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // response.json().then( function(json) {
    //               console.log(json); FROM THE TEXT DONT KNOW IF RIGHT

   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}}

function validateInput(testInput) {
    if (testInput==="") {
        return "Empty";
    }
    if (isNaN (testInput)===true){
        return "Not a number";
    }
    if (isNaN (testInput)===false){
        return "Is a number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    validateInput("");
 event.preventDefault();
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');

    if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
    alert("All fields required!");
   formSubmission("Hello");
  //  event.preventDefault();
  };

  if (isNaN(pilotName.value) || isNaN(copilotName.value)){
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`
      copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready`;
      // event.preventDefault();
  }

else {
  alert("Pilot & Co-pilot need to be names, not numbers!");
  // event.preventDefault();
}
  
  if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
      alert("Fuel level & cargo mass need to be numbers!");
      // event.preventDefault();
  }

else{faultyItems.style.visibility = 'visible';
fuelStatus.innerHTML = 'Fuel level high enough for journey';
}
// AM I MISSING SOMETHING HERE?

if(cargoMass.value>10000){
  faultyItems.style.visibility = 'visible';
  cargoStatus.innerHTML = 'Cargo mass too heavy for shuttle to take off';
  launchStatus.innerHTML = 'Shuttle not ready for launch';
  launchStatus.style.color = 'red';
}

else {
  faultyItems.style.visibility = 'visible';
  cargoStatus.innerHTML = 'Cargo mass low enough for take off';
}

if(fuelLevel.value>10000 && cargoMass.value<=10000){
  faultyItems.style.visibility = 'visible';
  launchStatus.innerHTML = 'Shuttle is ready for launch';
  launchStatus.style.color = 'green';
  fuelStatus.innerHTML = 'Fuel level high enough for journey';
  cargoStatus.innerHTML = 'Cargo mass low enough for launch';
}

   console.log("Goodbye");
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    // need to write this function out
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
