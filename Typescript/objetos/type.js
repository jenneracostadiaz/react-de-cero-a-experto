"use strict";
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
