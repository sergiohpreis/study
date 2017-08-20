import React, {Component} from 'react';
// Conectar React e Redux
import {connect} from 'react-redux';

class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label><br/>
                <input onChange={this.handleChange} value={this.props.value} />
            </div>
        );
    };
};

/*
Mapear os atributos do estado (store) da aplicação para as
propriedades dos componentes.
Uma vez que o estado da aplicação é global (store), somente
iremos trabalhar com as propiedades dos componentes, por isso
faremos o uso desse método
*/
function mapStateToProps(state) {
    return {
        value: state.field.value
    };
};

export default connect(mapStateToProps)(Field);