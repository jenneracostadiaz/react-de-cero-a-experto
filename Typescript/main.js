"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123,
    };
    const { poder, vision } = avengers;
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman.toUpperCase(), resto.poder.toFixed(2));
    };
    const avengersArr = [
        'Cap. America',
        'Ironman',
        'Thor',
        'Hulk',
        'Spiderman',
    ];
    const [, ironman] = avengersArr;
})();
(() => {
    const ironman = {
        nombre: 'Ironman',
        weapon: 'Armorsuit',
    };
    const thor = {
        nombre: 'Thor',
        weapon: 'Mjolnir',
    };
    const hulk = {
        nombre: 'Hulk',
        weapon: 'Strength',
    };
    const avengers = [ironman, thor, hulk];
    for (const avenger of avengers) {
        console.log(avenger.nombre, avenger.weapon);
    }
})();
(() => {
    const nombre = 'Jenner';
    const getName = () => {
        console.log('nuevo nombre');
    };
})();
//# sourceMappingURL=main.js.map