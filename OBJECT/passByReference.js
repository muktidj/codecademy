let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

// Write your code below

//Write a function greenEnergy() that has an object as a parameter and sets that object's 'Fuel Type' property to 'avocado oil'.
let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
}
//end
let remotelyDisable = obj => {
    obj.disabled = true;
}
//end



greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship)