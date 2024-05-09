import { Mago } from "./Mago.js";

export class MagoVazio extends Mago{
    
    static _manaMultiplier = 2;

    constructor(nome, cpf){
        super(nome, cpf);
        this._mana = 100 * MagoVazio._manaMultiplier;
    }

    sumonar(){
        console.log("Sumonou um fantoche");
    }

    atacar(dano){
        console.log(`Atacou, dando ${dano/MagoVazio._manaMultiplier} de dano`)
    }
}