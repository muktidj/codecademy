// The filter()Metode menciptakan sebuah array baru dengan semua elemen yang lulus tes dilaksanakan oleh fungsi yang disediakan.
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => number < 250);
console.log(smallNumbers);


const name = ['Mukti', 'Ayu Retno', 'Zulfa Dinda']; 

const chooseName = name.filter(nameList => nameList.length > 5);
console.log(chooseName.join(' - '))