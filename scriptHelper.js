// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let div = document.getElementById("missionTarget");
  div.innerHTML=`

                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">
   `
}

function validateInput(testInput) {
    if (testInput==="") {
        return "Empty";
    }
    if (isNaN (testInput)===true){
        return "Not a Number";
    }
    if (isNaN (testInput)===false){
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoStatus) {
    validateInput("");
 
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let cargoLevel = document.getElementById('cargoLevel');
console.log ();
    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === ""){
    alert("All fields required!");
  };

  if (isNaN(pilot) || isNaN(copilot)){
      pilotStatus.innerHTML = `Pilot ${pilot} is ready`
      copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`;
  }

else {
  alert("Pilot & Co-pilot need to be names, not numbers!");
}
  
  if (isNaN(fuelLevel) || isNaN(cargoLevel)){
      alert("Fuel level & cargo mass need to be numbers!");
  }
  
//   
if (fuelLevel < 10000) {
  list.style.visibility ='visible';
  fuelStatus.innerHTML = 'There is not enough fuel for the journey.';
  launchStatus.innerHTML = 'Shuttle not ready for launch';
  launchStatus.style.color ='red';

 } else if(cargoLevel > 10000) {
  list.style.visibility = 'visible';
  cargoStatus.innerHTML = 'There is too much mass for the shuttle to take off.';
  launchStatus.innerHTML = 'Shuttle not ready for launch';
  launchStatus.style.color ='red';
  
 } else if (fuelLevel > 10000 && cargoLevel < 10000) {
  list.style.visibility = 'visible'
  launchStatus.innerHTML = 'Shuttle is ready for launch.';
  launchStatus.style.color = 'green';

 } else if (fuelLevel == 10000 && cargoLevel == 10000) {
  list.style.visibility = 'visible';
  fuelStatus.innerHTML = 'There is not enough fuel for the journey.';
  launchStatus.innerHTML = 'Shuttle not ready for launch';
  launchStatus.style.color = 'red';
 }
}


function myFetch() {
    let planetsReturned;
    planetsReturned = fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });
    return planetsReturned;    
      }

function pickPlanet(planets) {
        let randPlanet = Math.random()
        let index = Math.floor(Math.random()*
        planets.length);
        return planets[index];
        console.log(randPlanet)
    }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
