class DateHelper {
    constructor(){
        // Lança um erro caso o desenvolvedor instancie a classe
        throw new Error('Esta classe não pode ser instanciada');
    };
    
    // Método que converte texto para data
    static textoParaData(texto){
        // Valida se a data esta no formato certo "aaaa-mm-dd"
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item,indice) => item - indice%2));
    };

    // Método que converte data para texto
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    };
};