import { Cliente } from "./Funcionarios/Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor1 = new Diretor("Roger", 95858475685, 30000);
diretor1.cadastrarSenha("123456");

const gerente1 = new Gerente("Maria", 83495886845, 10000);
gerente1.cadastrarSenha("123");

const cliente1 = new Cliente("Cleber", 37495069593, "321");

const diretorEstaLogado = SistemaAutenticacao.login(diretor1, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente1, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "321");

console.log("Diretor esta logado: ", diretorEstaLogado);
console.log("Gerente esta logado: ", gerenteEstaLogado);
console.log("Cliente esta logado: ", clienteEstaLogado);