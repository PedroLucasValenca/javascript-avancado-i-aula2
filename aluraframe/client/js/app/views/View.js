class View {

    constructor(elemento) {
        
        this._elemento = elemento;
    }

    template() {

        throw new Error('O metodo template deve ser implementado'); 
    }

    update(model) {
        
        this._template.innerHTML = this.template(model);
    }

}