function createGreeter(greeting) {
  return function greet(name) {
    console.log(greeting, name);
  };
}
let greetInEnglish = createGreeter("Hello");
greetInEnglish("Bobby");       // mencetak "Hello Bobby"
let greetInIndonesian = createGreeter("Halo");
greetInIndonesian("Bobby");    // mencetak "Halo Bobby"