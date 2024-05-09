// Classe ABSTRATA <- Serve apenas para ser herdada, nunca instânciada.
export class Conta{

    constructor(saldoInicial, cliente, agencia){
        
        //Tentando indicar que não deve ser instanciado um objeto da classe conta.
        if (this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente pois essa é uam classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }

    // Copiar e colar um código duplicado não é uma boa prática, por isso utilizaremos uma Herança

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
    
    //Criando um método Abstrato, que nunca pode ou deve ser chamado diretamente, apenas quando gerenciado por outras classes.
    sacar(valor, taxa){
        throw new Error("O método Sacar da conta é abstrato.")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
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
        if (this.tipo == 'Salario'){
            return   
        }
        const valorSacado = this.sacar(valor);
        conta.depositar(valor);
    }

}