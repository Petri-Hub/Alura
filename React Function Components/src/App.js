import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import { Container, Typography } from "@material-ui/core";
import "typeface-roboto";

function App() {
    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" align="center" component="h1" color="primary">
                Formulário de Cadastro
            </Typography>
            <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} validarNome={validarNome}/>
        </Container>
    );
}

function aoEnviarForm(dados) {
    console.log(dados);
}

function validarCPF(cpf) {
    if (cpf.length === 0)  return { valido: false, texto: "O CPF não pode estar em branco." };
    if (cpf.length !== 11) return { valido: false, texto: "O CPF deve ter 11 dígitos." };
    return {valido: true, texto: ""}
}

function validarNome(nome){
  if(nome.length === 0) return { valido: false, texto: "O nome não pode estar em branco." }
  if(nome.length > 10) return { valido: false, texto: "O nome não deve ter mais de 16 caracteres." }
  return { valido: true, texto: "" }
}

export default App;
