const tambah = (lebar=5, tinggi=10) => {
    if (lebar < 5 && tinggi > 5) {
        return "ini true yg kecetak"
    } else {
        return "ini false yg kecetak"
    }
};

// tambah(2, 12);
console.log(tambah());
