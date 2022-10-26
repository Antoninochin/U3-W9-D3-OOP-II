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
abstract getReddAnnNetto(): number;
}

abstract class Programmatore extends LavoratoreAutonomo{
        
    constructor(reddAnnuoLordo: number,codredd: number, tasInps: number,tasIrpef: number,){
        super(reddAnnuoLordo, codredd , tasInps, tasIrpef)
}
getUtileTasse():number{
    return this.reddAnnuoLordo * this.codredd /100
}
}
