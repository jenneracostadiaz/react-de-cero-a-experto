"use strict";
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
