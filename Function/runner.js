let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;

if ( registeredEarly && runnerAge > 18  ) {
	raceNumber += 1000;
}

if ( registeredEarly && runnerAge > 18 ) {
	console.log(`Registered Early Adult swill race at 9:30 am, your race number: ${raceNumber}`);
} else if ( !registeredEarly && runnerAge > 18) {
	console.log(`Registered Late Adults will race at 11:00 am, your race number: ${raceNumber}`);
} else if ( runnerAge < 18 ) {
	console.log(`Youth Registered will race at 12:30 pm, your race number: ${raceNumber}`);
} else {
	console.log('runner age 18 see the registration desk');
}