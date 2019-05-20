import Airplane from './airplane';

function displayFuelCapacity(){
  Airplane.availableAirplanes.forEach(function(element){
     console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity()

/* Module ES6
const Airplane =require('./airplane.js')

function displayAirplane() {
      console.log(Airplane.myAirplane)
}

displayAirplane()
*/
