"use strict";
(() => {
    const a = 10;
    console.log(a);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superHeroes[0]);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log('Batiseñal activada');
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(', ');
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'No last name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'No last name'}`;
        }
    };
    const name = fullName('Clark', 'Kent', true);
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullName('Clark', 'Kent');
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Clark', 'Kent');
    console.log(name);
})();
(() => {
    const fullName = (firstName, ...resArgs) => {
        return `${firstName} ${resArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved!`;
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Signal activated';
    };
    console.log(typeof activateBatisignal);
    const herName = returnName();
})();
(() => {
    const batimovil = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log('Disparando');
        },
    };
    const villanos = [
        {
            nombre: 'Lex Luthor',
            edad: 54,
            mutante: false,
        },
        {
            nombre: 'Erik Magnus Lehnsherr',
            edad: 49,
            mutante: true,
        },
        {
            nombre: 'James Logan',
            edad: undefined,
            mutante: true,
        },
    ];
    const charles = {
        poder: 'psiquico',
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Super reflexes'],
    };
    flash = {
        name: 'Clark Kent',
        powers: ['Super strength', 'Fly'],
        getName() {
            return this.name;
        },
    };
    console.log(flash.name);
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Super reflexes'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super strength', 'Fly'],
        getName() {
            return this.name;
        },
    };
    console.log(flash.name);
})();
(() => {
    let myCustomVariable = 'Diana Prince';
    console.log(typeof myCustomVariable);
    myCustomVariable = 100;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce Wayne',
        age: 45,
        powers: ['Rich', 'Intelligent'],
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 5;
    let exists;
    let power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    avenger = 150.5555;
    console.log(avenger.toFixed(2));
    console.log({ exists });
    console.log({ power });
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
        Fuerza[Fuerza["superman"] = 100] = "superman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.flash;
    const fuerzaSuperman = Fuerza.superman;
    const fuerzaBatman = Fuerza.batman;
    const fuerzaAcuaman = Fuerza.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
})();
(() => {
    const numbers = [1, 2, 3, 4, 5];
    numbers.push(6);
    console.log(numbers);
    const villian = ['Loki', 'Thanos', 'Ultron'];
    villian.forEach((v) => {
        console.log(v.toUpperCase());
    });
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!');
})();
() => {
    let isActive = null;
    console.log(isActive);
};
(() => {
    let avengers = 5;
    console.log(avengers);
    const villians = 20;
    console.log(villians);
    if (avengers < villians) {
        console.log('We are doomed!');
    }
    else {
        console.log('We are saved!');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = 'Linterna Verde';
    const volcanNegro = `Héroe: Volcán Negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(linternaVerde.toLowerCase());
    console.log(((_a = volcanNegro[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(() => {
    const hero = ['Dr. Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 95;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map