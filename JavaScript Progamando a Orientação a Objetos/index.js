import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Pedro", 90374892032);
const cliente2 = new Cliente("Julia", 39475960484);

const contaCorrentePedro = new ContaCorrente(1001, cliente1);
const contaCorrenteJulia = new ContaCorrente(1002, cliente2);

console.log(ContaCorrente.numeroDeContas)

