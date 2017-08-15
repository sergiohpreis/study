import React, {Component} from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos'

/*
O componente Todo será responsável por todo o estado
da aplicação, isso pois é mais simples de espalhar esse estado
para todos os outros componentes.
*/
export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {description: '', list: []};
        
        // Faz um bind para não perder o contexto do this
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    
        this.refresh();
    };

    refresh() {
        /*
        1 - Faz um GET organizando por data de criação
        2 - Seta a descrição para ''
        3 - Preenche a lista com todas as tarefas criadas no Banco
        */
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    };

    handleAdd() {
        const description = this.state.description;

        /*
        1 - Faz um POST enviando a descrição
        2 - Faz um refresh usando o método refresh
        */
        axios.post(URL, {description})
            .then(resp => this.refresh());
    };

    handleChange(e) {
        // Seta o State da descrição baseada no valor do input
        this.setState({...this.state, description: e.target.value})
    };

    handleRemove(todo) {
        /*
        1 - Faz um DELETE utilizando o ID da TODO
        2 - Faz um refresh usando o método refresh
        */
        axios.delete(`${URL}/${todo._id}`)
            .then(result => this.refresh())
    };

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm 
                handleAdd={this.handleAdd}
                handleChange={this.handleChange}/>
                <TodoList 
                list={this.state.list}
                handleRemove={this.handleRemove}/>
            </div>
        );
    };
}