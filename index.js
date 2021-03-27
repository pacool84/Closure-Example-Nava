const votacion = (edad) => {
  edad >= 18
    ? console.log(`Tu si puedes votar por que tienes ${edad} años`)
    : console.log(`Tu no puedes votar por que tienes ${edad} años`);
};

votacion(7);
