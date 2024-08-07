"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            console.log('Salvando el mundo');
        }
    }
    class Villan extends Mutante {
        conquistarMundo() {
            console.log('Conquistando el mundo');
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villan('Magneto', 'Erik');
    const printName = (character) => {
        console.log(character.name);
    };
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Cap', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('Nombre muy corto');
            }
            this.name = name;
        }
        getFullnameDesdeXmen() {
            console.log(super.getFullname());
        }
    }
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instace) {
                Apocalipsis.instace = new Apocalipsis('Soy Apocalipsis... el único');
            }
            return Apocalipsis.instace;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    console.log(apocalipsis);
    apocalipsis.changeName('Hola');
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    console.log(apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map