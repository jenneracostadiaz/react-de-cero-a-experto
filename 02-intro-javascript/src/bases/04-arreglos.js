const arreglo = [1, 2, 3, 4];

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function (num) {
  return num * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
