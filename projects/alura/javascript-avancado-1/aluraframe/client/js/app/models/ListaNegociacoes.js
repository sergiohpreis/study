class ListaNegociacoes {
    constructor(){
        this._negociacoes = [];
    };

    // Método que adiciona negociação a lista
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    };

    // Retorna as negociações
    get negociacoes(){
        return [].concat(this._negociacoes);
    }
};