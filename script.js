// Write your JavaScript code here!
// const {formSubmission, addDestinationInfo, pickPlanet} = require("./scriptHelper");
window.addEventListener("load", function() {
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
    //    Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.    // 

let selectedPlanet=pickPlanet(listedPlanets)
console.log (selectedPlanet.image);
// call function addDestinationInfo and pass in appropriate parameters (this will be end of fetch stuff)
addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
})
 let faultyItems = document.getElementById('faultyItems');
//  set visibility
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {  
        event.preventDefault();
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    
formSubmission(document, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
});
})
