import { DiasDaSemana } from '../enums/daysOfTheWeek.js';
import { Negociacao } from '../models/Negociacao.js';
import { Negociacoes } from '../models/Negociacoes.js';
import MensagemView from '../views/MensagemView.js';
import NegociacoesView from '../views/NegociacoesView.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#NegociacoesView', true);
    private mensagemView = new MensagemView('#MensagemView')

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes)
    }

    public adiciona(): void {
        const negociacao = this.criaNegociacao();

        if(this.ehDiaUtil(negociacao.data)){
            this.negociacoes.adiciona(negociacao);
            this.limparFormulario();
            this.atualizaView()
        } else {
            this.mensagemView.update('Apenas negociações criadas em dias úteis são aceitas')
        }
    } 

    private ehDiaUtil(data: Date): boolean{
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO
    }

    private criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0';
        this.inputData.focus();
    }

   private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update('Negociação adicionada com sucesso')
    }
}
