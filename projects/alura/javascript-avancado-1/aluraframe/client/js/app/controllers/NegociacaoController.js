class NegociacaoController {
    constructor(){
        // O bind é utilizado para atribuir o this novamente ao document
        let $ = document.querySelector.bind(document);

        // Colocar os elementos como atributos evita que o DOM seja percorrido muitas vezes melhorando a performance
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');

        // Cria uma nova lista de negociações
        this._listaNegociacoes = new ListaNegociacoes();

        // Cria uma instancia da view
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        // Atualiza a view com o modelo (que é a lista de negociações)
        this._negociacoesView.update(this._listaNegociacoes);
    };

    // Método que adiciona a negociação (é utilizado no onsubmit do form)
    adiciona(event){
        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();

        // Atualiza a view com o modelo (que é a lista de negociações)
        this._negociacoesView.update(this._listaNegociacoes);
    };

    // Método responsável por criar uma negociação
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this.inputData.value), 
            this.inputQuantidade.value, 
            this.inputValor.value
        );
    };

    // Método que limpa os campos e coloca o foco no input de data
    _limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.0';

        this.inputData.focus();
    };
};