const girl = ['Ayu Retno', 'Febriyanti Nurfadilah','Zulfa Dinda'];

//call back function
const printGirl = (girl) => console.log(`Pacarnya Mukti itu ${girl}`);
girl.forEach(printGirl);

//iterator
girl.forEach(girl => console.log(`Pacarnya Mukti itu ${girl}`));