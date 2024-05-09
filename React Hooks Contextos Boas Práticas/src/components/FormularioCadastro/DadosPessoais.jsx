import React, { useState, useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';

function DadosPessoais({aoEnviar}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [novidades, setNovidades] = useState(true);
    const [promocoes, setPromocoes] = useState(true);

    const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

    const validacoes = useContext(ValidacoesCadastro)

    function validarCampos(event){
        const {name, value} = event.target
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value)
        setErros(novoEstado)
    }

    function possoEnviar(){
        let possoEnviar = true
        for(let campo in erros){
            if(!erros[campo].valido){
                return false
            }
        }
        return true
    }


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if(possoEnviar()){
                    aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
                }
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome"
                name="nome"
                variant="outlined"
                label="Nome"
                type="text"
                fullWidth
                margin="normal"
                required
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                name="sobrenome"
                variant="outlined"
                label="Sobrenome"
                type="text"
                fullWidth
                margin="normal"
                required
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                id="cpf"
                name="cpf"
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                variant="outlined"
                label="CPF"
                type="text"
                fullWidth
                margin="normal"
                required
            />

            <FormControlLabel
                control={
                    <Switch
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked)
                    }}
                        name="novidades"
                        color="primary"
                    />
                }
                label="Novidades"
            />

            <FormControlLabel
                control={
                    <Switch
                    checked={promocoes}
                    onChange={(event) => {
                        setPromocoes(event.target.checked)
                    }}
                        name="promocoes"
                        color="primary"
                    />
                }
                label="Promoções"
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                value="Cadastrar"
            >
                Prosseguir
            </Button>
        </form>
    );
}

export default DadosPessoais;