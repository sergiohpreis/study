class Negociacao {

    // Onde são definidos as propiedades da Classe
    constructor(data, quantidade, valor){
        /* A convensão do _ antes da propiedade foi adotada para
        ficar explicito que a mesma só deve ser acessada pela propria classe.
        Para acessar uma propiedade fora da classe, utilizar os getters */
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        // Congela a variavel this para o objeto ficar imutavel
        Object.freeze(this);
    };

    get volume() {
        return this._quantidade * this._valor;
    };

    get data() {
        return new Date(this._data.getTime());
    };

    get quantidade() {
        return this._quantidade;
    };

    get valor() {
        return this._valor;
    };
};
