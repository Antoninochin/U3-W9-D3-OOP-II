"use strict";
class LavoratoreAutonomo {
    constructor(codredd, reddAnnuoLordo, tasInps, tasIrpef) {
        this.reddAnnuoLordo = reddAnnuoLordo;
        this.codredd = codredd;
        this.tasInps = tasInps;
        this.tasIrpef = tasIrpef;
    }
}
class Programmatore extends LavoratoreAutonomo {
}
class Contabile extends LavoratoreAutonomo {
}
