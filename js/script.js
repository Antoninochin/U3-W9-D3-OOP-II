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
    constructor(reddAnnuoLordo, codredd, tasInps, tasIrpef) {
        super(reddAnnuoLordo, codredd, tasInps, tasIrpef);
    }
    getUtileTasse() {
        return this.reddAnnuoLordo * this.codredd / 100;
    }
}
