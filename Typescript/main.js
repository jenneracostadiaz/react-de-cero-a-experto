"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log('...... gogogo!!!');
    },
};
const guason = {
    reir: true,
    comer: true,
    llorar: false,
};
const reir = (guason) => {
    if (guason.reir) {
        console.log('JAJAJAJA');
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor() {
        this.nombre = '';
        this.edad = 0;
        this.sexo = '';
        this.estadoCivil = '';
    }
    imprimirBio() { }
}
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    };
})();
(() => {
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 33,
        address: {
            id: 123,
            zipCode: '123456',
            city: 'Mexico',
        },
        getFullAddress(id) {
            return `${this.address.city}, ${this.address.zipCode}`;
        },
    };
    console.log(client);
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map