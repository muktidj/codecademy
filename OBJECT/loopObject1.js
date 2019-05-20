let pemainFutsal = {
    pemain: {
        'pemain depan': {
            nama : 'Mukti Dwi Jatmoko',
            posisi : 'Penyerang',
            skill : 'Lari Kenceng'
        },
        'pemain tengah': {
            nama : 'Dafa Nabawi',
            posisi : 'Gelandang',
            skill : 'gocekan maut',
        },
        'pemain belakang': {
            nama : 'Luthfi Otoriter',
            posisi : 'Bek',
            skill : 'Tekel Maut',
        },
        kiper: {
            nama : 'Bejo',
            posisi : 'Kiper',
            skill: 'Jago Nagkep',
        }
    }
};

for (let tim in pemainFutsal.pemain) {
    console.log(`${tim}: ${pemainFutsal.pemain[tim].nama},
                         ${pemainFutsal.pemain[tim].posisi},
                         ${pemainFutsal.pemain[tim].skill}`);
}
