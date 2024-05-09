import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(saldo, cliente, agencia){
        super(saldo, cliente, agencia);
        ContaCorrente.numeroDeContas++
    }

    sacar(valor){
        return this._sacar(valor, 1.1);
    }
    
}

