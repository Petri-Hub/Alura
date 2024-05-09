export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataStr: string, quantidadeStr: string, valorStr: string): Negociacao{
        const data = new Date(dataStr.replace(/-/g, ","))
        const quantidade = parseFloat(quantidadeStr)
        const valor = parseFloat(valorStr)
        return new Negociacao(data, quantidade, valor)
    }
}