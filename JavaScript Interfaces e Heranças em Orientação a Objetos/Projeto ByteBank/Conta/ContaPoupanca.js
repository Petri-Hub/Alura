import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    constructor(saldoInicial, cliente, agencia){
        // O super() é utilizado quando queremos chamar algo dentro da classe Mãe, que está sendo herdada
        super(saldoInicial, cliente, agencia);
    }    

    sacar(valor){
        return this._sacar(valor, 1.02)
    }
}