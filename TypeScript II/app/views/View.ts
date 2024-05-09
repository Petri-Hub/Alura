export default abstract class View<T>{
    protected elemento: HTMLElement
    private escapar = false

    constructor(seletor: string, escapar?: boolean){
        const elemento = document.querySelector(seletor)

        if(elemento){
            this.elemento = elemento as HTMLElement
        } else {
            throw new Error(`O seletor ${seletor} não retornou nenhum elemento.`)
        }

        if(escapar){
            this.escapar = escapar
        }
    }

    //Método que deve ser sempre sobreescrito.
    protected abstract template(model: T): string;

    public update(model: T): void{
        let template = this.template(model)

        if(this.escapar){
            template = template.replace(/<script>.*?<\/script>/gi, "")
        }

        this.elemento.innerHTML = this.template(model)  

    }
}