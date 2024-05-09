import View from "./View.js";
export default class MensagemView extends View {
    constructor(seletor) {
        super(seletor);
    }
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    update(model) {
        const updatedMessage = this.template(model);
        this.elemento.innerHTML = updatedMessage;
    }
}
