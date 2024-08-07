"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3 ? true : false;
    };
    const validateDate = (myDate) => {
        return isNaN(myDate.getTime()) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Hola'));
//# sourceMappingURL=main.js.map