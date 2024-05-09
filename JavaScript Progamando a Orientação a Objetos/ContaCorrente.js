import {Cliente} from "./Cliente.js";

export class ContaCorrente{

    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;
    
    //------------GET/SETTERS------------------------------------------//


    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //------------METODOS----------------------------------------------//
    

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    
    depositar(valor){
        //Isso é chamado de Early Return, pois verifica todas as condições que não devem acontecer, e que se ocorrerem, cancelam a execução do código
        if (valor <= 0){
            console.log("Não é possível");
            return;
        } else {
            this._saldo += valor;
            return valor;
        } 
    }
    
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valor)
    }

    //------------CONSTRUCTOR------------------------------------------//

    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente
        ContaCorrente.numeroDeContas++
    }

}

