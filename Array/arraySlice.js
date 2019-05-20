const daftarBelanja = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
//Array.slice() digunakan untuk ’memotong’ array menjadi array baru, atau menjadi ’sub-array’ dari array asal. Method slice() ini membutuhkan 2 buah argumen yang berisi posisi index awal dan akhir pemotongan. Jika hanya diberikan 1 argumen, maka method ini akan mengembalikan array baru dimulai dari posisi argumen sampai dengan akhir array. Jika argumen bernilai negatif, maka perhitungan akan dimulai dari akhir array
const useSlice = daftarBelanja.slice(1,4);
console.log(useSlice);
//output: ['bananas', 'coffee beans', 'brown rice'];
console.log(daftarBelanja);
//output: ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];