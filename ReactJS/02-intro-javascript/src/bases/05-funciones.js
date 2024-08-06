const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

console.log(saludar3("Gohan"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "Goku_1524",
});

console.log(getUser());

//Tarea
//1. Transformar a funcion flecha
//2. Retornar un objeto implicito
//3. Pruebas
/*
  function getUsuarioactivo(nombre) {
    return {
      uid: "ABC567",
      username: nombre,
    };
  }
  */

const getUsuarioactivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioactivo("Juan");
console.log(usuarioActivo);
