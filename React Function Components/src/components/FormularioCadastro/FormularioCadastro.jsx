import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCPF, validarNome}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [novidades, setNovidades] = useState(true);
    const [promocoes, setPromocoes] = useState(true);

    const [erros, setErros] = useState({cpf:{valido:true, texto:""}, nome:{valido: true, texto: ""}, sobrenome:{valido: true, texto: ""}})

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                onBlur={(event) => {
                    let ehValido = validarNome(event.target.value)
                    setErros({...erros,nome:ehValido})
                }}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="nome"
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
                onBlur={(event) => {
                    let ehValido = validarNome(event.target.value)
                    setErros({...erros,sobrenome:ehValido})
                }}
                error={!erros.sobrenome.valido}
                helperText={erros.sobrenome.texto}
                id="sobrenome"
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
                onBlur={event => {
                    let ehValido = validarCPF(event.target.value)
                    setErros({...erros,cpf:ehValido})
                }}
                id="cpf"
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
                Cadastrar
            </Button>
        </form>
    );
}

export default FormularioCadastro;
