const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};


// Object.keys()Metode mengembalikan array properti sendiri objek yang diberikan itu names, dalam urutan yang sama seperti yang kita dapatkan dengan loop normal.
const robotKeys = Object.keys(robot);
console.log(robotKeys);


// The Object.entries()Metode mengembalikan array sendiri properti enumerable suatu objek tertentu yang[key, value]pasang, dalam urutan yang sama seperti yang disediakan oleh for...in lingkaran(perbedaan adalah bahwa untuk - dalam lingkaran menyebutkan properti di rantai prototipe juga).Urutan array yang dikembalikan oleh Object.entries() tidak tergantung pada bagaimana suatu objek didefinisikan
const robotEntries = Object.entries(robot)[0];
console.log(robotEntries);


// Object.assign()metode yang digunakan untuk menyalin nilai dari semua properti enumerable sendiri dari satu atau lebih sumber objek ke objek target.Ini akan mengembalikan objek target.
const newRobot = Object.assign({ laserBlaster: true, voiceRecognition: true })
console.log(newRobot);
