class Mensagem {
    /*
    No ES6, um parametro como "texto=''" significa que caso o parametro 
    não seja passado, o mesmo será definido como ''. Qualquer valor pode
    ser usado como padrão
    */
    constructor(texto='') {
        this._texto = texto;
    }

    get texto() {
        return this._texto;
    };

    /*
    Método setter que serve para definir o valor de uma propiedade, assim como o
    getter serve para obter (get) o valor.
    São chamados da seguinte forma:
    console.log(Mensagem.texto) // ''
    Mensagem.texto = 'Alterando a propiedade texto';
    console.log(Mensagem.texto) // 'Alterando a propiedade texto'
    */  
    set texto(texto) {
        this._texto = texto;
    };
};