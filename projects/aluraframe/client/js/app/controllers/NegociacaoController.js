class NegociacaoController {
    constructor(){
        // O bind é utilizado para atribuir o this novamente ao document
        let $ = document.querySelector.bind(document);

        // Colocar os elementos como atributos evita que o DOM seja percorrido muitas vezes melhorando a performance
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
    };

    // Método que adiciona a negociação (é utilizado no onsubmit do form)
    adiciona(event){
        event.preventDefault();

        var data = this.inputData.value.replace('-','/');
        var quantidade = this.inputQuantidade.value;
        var valor = this.inputValor.value;

        var negociacao = new Negociacao(new Date(data), quantidade, valor);

        console.log(negociacao);
        this.limpa();
    };

    // Método que limpa os campos e coloca o foco no input de data
    limpa() {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.0';
        this.inputData.focus();
    };
};