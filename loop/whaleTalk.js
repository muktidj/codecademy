let input = "turpentine and turtles";
input     = input.toLowerCase();
let vokal = ['a','i','u','e','o'];
console.log('Length Of String', input.length);

const resultArray= [];

for(let inputIndex = 0; inputIndex < input.length; inputIndex++) {
		//console.log(`inputIndex is ${inputIndex}`)
	for (let vokalIndex = 0; vokalIndex < vokal.length; vokalIndex++) {
		//console.log(`vokalIndex is ${vokalIndex}`);
		if (input[inputIndex] === vokal[vokalIndex]) {
			resultArray.push(input[inputIndex]);
		}
	}

			if (input[inputIndex] === 'e') {
			resultArray.push(input[inputIndex]);
			}
			
			if (input[inputIndex] === 'u') {
			resultArray.push(input[inputIndex]);
			}
	}
	console.log(resultArray.join(' - '));
		
