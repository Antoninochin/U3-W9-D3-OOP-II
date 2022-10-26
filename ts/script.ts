abstract class LavoratoreAutonomo{
    codredd: number;
    reddAnnuoLordo: number;
    tasInps: number;
    tasIrpef: number;
constructor(codredd: number, reddAnnuoLordo: number,tasInps: number, tasIrpef: number,){
    this.reddAnnuoLordo = reddAnnuoLordo;   
    this.codredd = codredd;
    this.tasInps =tasInps; 
    this.tasIrpef = tasIrpef
}
abstract getUtileTasse(): number;
abstract getTasseInps(): number;
abstract getTasseIrpef(): number;
}

abstract class Programmatore extends LavoratoreAutonomo{ 
//     constructor(reddAnnuoLordo: number,codredd: number, tasInps: number,tasIrpef: number,){
//         super(reddAnnuoLordo, codredd , tasInps, tasIrpef)
// }
abstract getReddAnnNetto(): number;
}
abstract class Contabile extends LavoratoreAutonomo{ 
    abstract getReddAnnNetto(): number;
    }
