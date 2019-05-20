console.log("Baris Pertama bukan callback function.");

 const usingSTO = () => {
       console.log("Hai Muktiii");
 }


 setTimeout(usingSTO, 3000);

console.log("ini juga bukan callback function, baris selanjutnya call back function.");