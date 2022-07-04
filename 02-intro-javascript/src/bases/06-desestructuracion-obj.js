const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Iroman",
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const useContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
  //   console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1563,
      lgn: -12.6512,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lgn },
} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lgn);
