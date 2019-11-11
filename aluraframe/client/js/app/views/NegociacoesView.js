class NegociacoesView {

    constructor(elemento) {
        this._elemento = elemento;
    }


    _template(modelo) {
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
                ${modelo.negociaoes.map((n)=> {
                  
                    return `
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    `;
                })}
            </tbody>
        
            <tfoot>
            </tfoot>
        </table>
        `;
    }

    update(modelo) {
        this._elemento.innerHtml = this._template(modelo);
    }
}

