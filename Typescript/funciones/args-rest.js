"use strict";
(() => {
    const fullName = (firstName, ...resArgs) => {
        return `${firstName} ${resArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
