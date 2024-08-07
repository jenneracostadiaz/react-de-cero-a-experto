"use strict";
(() => {
    const numbers = [1, 2, 3, 4, 5];
    numbers.push(6);
    console.log(numbers);
    const villian = ['Loki', 'Thanos', 'Ultron'];
    villian.forEach((v) => {
        console.log(v.toUpperCase());
    });
})();
