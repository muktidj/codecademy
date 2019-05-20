//function ini akan dijadikan callback
function prosesData(fullName) {
      console.log(`Hello ${fullName}`);
}

//function untuk menerima inputan
function getInput(firstName, lastName, myCallback) {
      let nameFull = firstName+ ' '+ lastName;
      if(typeof myCallback === "function") {
            //pastikan bahwa parameter ke-3 adlh sebuah fungsi
            myCallback(nameFull);
      } else {
            console.log('are you kidding ? that\'s not a function');
      }
}
      //kasih inputan, callback 'prosesData
getInput("Mukti", "Ganteng", prosesData)