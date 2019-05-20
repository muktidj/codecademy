/*Sintaks map() ->
 var new_array = arr .map ( callback fungsi (currentValue [, index [, array]]) {
     Elemen kembali untuk new_array}[, thisArg]) */

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// map() Metode menciptakan array baru dengan hasil memanggil fungsi disediakan di setiap elemen dalam array panggilan.

const secretMessage = animals.map(animal => {
    return animal[2]
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(bigNumber => {
    return bigNumber/100;
})

console.log(smallNumbers);