class DateHelper {
    constructor(){
        // Lança um erro caso o desenvolvedor instancie a classe
        throw new Error('Esta classe não pode ser instanciada');
    };

    // Métodos "static" podem ser utilizados sem que uma instancia da classe seja criada
    
    // Método que converte texto para data
    static textoParaData(texto){
        // Valida se a data esta no formato certo "aaaa-mm-dd"
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

        // Usando o spread operator (...) que passa cada item do array como um parametro do objeto Date
        return new Date(...texto.split('-').map((item,indice) => item - indice%2));
    };

    // Método que converte data para texto
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    };
};