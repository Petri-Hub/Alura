import { NegociacaoDoDia } from "../interfaces/negociacaoDoDia";
import { Negociacao } from "../models/negociacao";

export class NegociacoesService{
    public async obterNegociacoes(): Promise<Negociacao[]> {
        return fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((dados: NegociacaoDoDia[]) => {
                return dados.map(dado => {
                    return new Negociacao(
                        new Date(), 
                        dado.vezes ,
                        dado.montante,
                    )
                })
            })
    }
}