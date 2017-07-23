class MensagemView extends View {
    constructor(elemento) {
        // O metodo super() serve para passar o parametro para a classe pai
        super(elemento);
    };

    // Método responsável por retornar o template atualizado com o modelo
    template(model) {
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    };
};