import { StepLabel, Typography, Stepper, Step } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntregas from "./DadosEntregas";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar }) {
    const [etapaAtual, setEtapaAtual] = useState(0)
    const [dadosColetados, setDados] = useState({})

    useEffect(() => {
        if(etapaAtual === formulario.length-1)
        aoEnviar(dadosColetados)
        
    })

    const formulario = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntregas aoEnviar={coletarDados} />,
        <Typography variant="h5">Obrigado pelo cadastro!</Typography>
    ]

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados})
        proximo()
    }

    function proximo(){
        setEtapaAtual(etapaAtual+1)
    }

    return <>
    <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Endereço</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
    {formulario[etapaAtual]}
    </>;
}


export default FormularioCadastro;
