import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import { Container, Typography } from "@material-ui/core";
import "typeface-roboto";
import { validarCPF, validarSenha } from './models/cadastro.js'
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

function App() {
    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" align="center" component="h1" color="primary">
                Formulário de Cadastro
            </Typography>
            <ValidacoesCadastro.Provider value={{cpf: validarCPF, senha: validarSenha}}>
            <FormularioCadastro aoEnviar={aoEnviarForm}/>
            </ValidacoesCadastro.Provider>
        </Container>
    );
}

function aoEnviarForm(dados) {
    console.log(dados);
}
export default App;
