// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");
window.addEventListener("load", function() {
    let lisetedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
    //    Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destina\tion.    // 
let selectedPlanet=pickPlanet(listedPlanets) 
// call function addDestinationInfo and pass in appropriate parameters (this will be end of fetch stuff)
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
formSubmission();


// this needs to go in helper
    //   let pilotName = document.querySelector("input[name=pilotName]");
    //   let copilotName = document.querySelector("input[name=copilotName]");
    //   let fuelLevel = document.querySelector("input[name=fuelLevel]");
    //   let cargoMass = document.querySelector("input[name=cargoMass]");
       
    //   let faultyItems = document.getElementById('faultyItems');
    //   let fuelStatus = document.getElementById('fuelStatus');
    //   let launchStatus = document.getElementById('launchStatus');
    //   let pilotStatus = document.getElementById('pilotStatus');
    //   let copilotStatus = document.getElementById('copilotStatus');

      
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
 



 