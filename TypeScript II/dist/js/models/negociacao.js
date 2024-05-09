export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(dataStr, quantidadeStr, valorStr) {
        const data = new Date(dataStr.replace(/-/g, ","));
        const quantidade = parseFloat(quantidadeStr);
        const valor = parseFloat(valorStr);
        return new Negociacao(data, quantidade, valor);
    }
}
