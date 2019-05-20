const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


//The findIndex()Metode mengembalikan indeks dari elemen pertama dalam array yang memenuhi fungsi pengujian yang disediakan . Jika tidak, ia mengembalikan -1, menunjukkan tidak ada unsur yang lulus tes.
const foundAnimal = animals.findIndex(animal => animal === 'elephant');
console.log(foundAnimal);
console.log(animals[foundAnimal]);


const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's' ? true : false;});
//huruf depan S
console.log(startsWithS);
console.log(animals[startsWithS]);