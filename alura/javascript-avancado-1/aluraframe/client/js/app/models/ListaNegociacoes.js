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
        /*
        Utilizamos o concat para retornar uma copia da lista de negociações, isso tudo
        para que não sejá possivel atualizar a lista sem utilizar o método adiciona()
        */
        return [].concat(this._negociacoes);
    }
};