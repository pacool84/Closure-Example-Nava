function padre() {
  const a = "Aqui estoy";
  function closure() {
    console.log(a);
  }
  closure();
}
padre();

function votacion() {
  const edad = 7;
  function logica() {
    edad >= 18 ? console.log("Puedes Votar") : console.log("No puedes votar");
  }
  logica();
}

votacion();
