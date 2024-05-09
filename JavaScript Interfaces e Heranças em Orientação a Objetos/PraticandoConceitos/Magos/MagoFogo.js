import { Mago } from "./Mago.js";

export class MagoFogo extends Mago{
    
    static _manaMultiplier = 0.7;
    
    constructor(nome, cpf){
        super(nome, cpf);
        this._mana = 100 * MagoFogo._manaMultiplier;
    }

    disparoDeFogo(dano){
        console.log(`Realizou um disparo de fogo, dando ${dano} de dano`);
    }

    atacar(dano){
        console.log(`Atacou, dando ${dano/MagoFogo._manaMultiplier} de dano`)
    }
}