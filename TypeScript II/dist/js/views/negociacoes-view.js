export default class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
            return `
                                <tr>
                                    <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                    <td>${negociacao.volume}</td>
                                </tr>
                            `;
        }).join("\n")}
                </tbody>
            </table>
        `;
    }
    update(model) {
        const updatedTemplate = this.template(model);
        this.elemento.innerHTML = updatedTemplate;
    }
}
