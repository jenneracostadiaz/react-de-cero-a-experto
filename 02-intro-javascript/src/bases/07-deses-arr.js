const personajes = ["Goku", "Vegeta", "Trunks"];
const [, p2, p3] = personajes;
console.log(p2);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1.el 1er valor del arreglo se llamara nombre
//2.el 2do se llama setNombre
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = useState("Goku");

console.log(nombre);
setNombre();
