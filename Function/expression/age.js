let age = 18
let message;

if (age < 20 ) {
    message = () => {
        console.log("Umur Diatas 18 tahun")
    };

} else {

    message = () => {
        console.log("Belum cukup Umur")
    };
}

message();