export class Mago{
    
    static numeroDeMagos = 0;

    constructor(nome, cpf){
        if (this.constructor == Mago){
            throw new Error("Você não deve instanciar uma classe abstrata");
        }

        this._nome = nome;
        this._cpf = cpf;
        this._mana;
    }

    get nome(){
        return this._nome;
    }

    get cpf(){
        return this._cpf;
    }

    atacar(dano){
        throw new Error("O método atacar é abstrato");
    }

    _atacar(dano){
        console.log(`Atacou, deu ${dano} de dano`);
    }

    disparoMagico(dano){
        console.log(`Realizou um disparo mágico, dando ${dano} de dano`);
    }
}