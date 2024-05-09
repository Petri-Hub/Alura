class NegociacaoController {
    constructor() {
        //Isso é muito interessante
        const $ = document.querySelector.bind(document);
        //Dados
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        this._listaNegociacoes = new ListaNegociacoes((model) => {
            this._negociacoesView.update(model)
        });
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagem = new Mensagem()

        this._mensagemView.update(this._mensagem)
        this._negociacoesView.update(this._listaNegociacoes)
    }

    apaga(){
        this._listaNegociacoes.esvazia()
        this._mensagem.texto = 'Negociações apagadas.'
        this._mensagemView.update()
    }

    adiciona(event) {
        event.preventDefault();

        this._criaNegociacao();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso!'
        this._mensagemView.update(this._mensagem)
        this._limpaFormulario();
        //Adicionar a negociação em uma lista
    }

    _criaNegociacao(data, quantidade, valor) {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;
        this._inputData.focus();
    }
}
