const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};

const { functionality } = robot;
functionality.beep();
const { model } = robot;
console.log(model);
// Object.keys()Metode mengembalikan array properti sendiri objek yang diberikan itu names, dalam urutan yang sama seperti yang kita dapatkan dengan loop normal.
console.log(Object.keys(robot));
