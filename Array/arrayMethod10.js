const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//Array.shift() akan menghapus elemen paling awal array
const firstElement = groceryList.shift();
console.log(groceryList);
//output: ['bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']
console.log(firstElement);
//output: orange juice
//End Array.shift

const number = [1,2,3,4];
//Array.unshift akan menambahkan elemen baru diawal array
const addNumber = number.unshift(4,5,6,7);
console.log(number);
//output: [4,5,6,7,1,2,3,4]
console.log(addNumber);
//output: 8 , panjang isi array


//Array.indexOf
const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);
//output: 3 , posisi pasta  index 
//End Array.indexOf


const message = ['Good','Bye','Pecundang'];

//Array.join berfungsi untuk menggabungkan elemen array menjadi sebuah string
console.log(message.join(' ')); //('')('-')(' , ')
//output: Good Bye Pecundang