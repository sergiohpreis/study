class View {
    /*
    Recebido através do metodo super() da classe filha, caso não tenhamos
    nenhuma propiedade diferente na classe filha, podemos omitir o uso
    do metodo super()
    */
    constructor(elemento){
        this._elemento = elemento;
    };

    template(model) {
        throw new Error('O método template deve ser sobrescrito');
    }

    // Método responsável por atualizar o HTML com o template
    update(model) {
        this._elemento.innerHTML = this.template(model);
    };
};