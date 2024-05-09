import { Mago } from "./Mago.js";

export class MagoTerra extends Mago{

    static _manaMultiplier = 1.5;

    constructor(nome, cpf){
        super(nome, cpf);
        this._mana = 100 * MagoTerra._manaMultiplier;
    }

    cura(cura){
        console.log(`Realizou um feitiço de cura, curando ${cura} de cura`);
    }

    atacar(dano){
        console.log(`Atacou, dando ${dano/MagoTerra._manaMultiplier} de dano`)
    }
}