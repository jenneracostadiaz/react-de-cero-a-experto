const persona = {
  nombre: "Jenner",
  apellido: "Acosta",
  edad: 28,
  direccion: {
    ciudad: "Lima",
    zip: 15321,
    latitud: 14.6512,
    longitud: 34.981152,
  },
};

const persona2 = { ...persona };
persona2.nombre = "Juan";

console.log(persona);
console.log(persona2);
