const Mobil = (warna , tahun) => {
    return {
    warna,
    tahun,
    suara(){
        console.log('breeem....breeemm')
    },
 }
};

const callMobil = Mobil('Merah',2012);
console.log(callMobil.warna);
console.log(callMobil.tahun);
callMobil.suara();