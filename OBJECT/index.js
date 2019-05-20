let palette = {
  profile: 'intense-red',
  name: 'Red',
  color: {
    code: 'red',
    beach: 'skyblue'
  },
  luminosity: 0.8
}

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
let {numEngines =100} = spaceship;
delete spaceship['Secret Mission'];
console.log(numEngines);

 let {color :{code, beach}} = palette;
 let {description = 'This is a color palette'} = palette;
 console.log(code);
console.log(palette.luminosity);
console.log(description);