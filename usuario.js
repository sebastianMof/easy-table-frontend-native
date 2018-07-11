import React, {Component} from 'react';

export class usuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rut: props.rut,
            password: props.password,
            nombre: props.nombre,
            apellido: props.apellido,
            email: props.email,
            tipo_usuario: props.tipo_usuario   
        }
    }

    render() {
        const {rut, tipo_usuario, nombre, apellido, email} = this.state;
        return <p>
            {rut}<br/>
            {nombre}<br/>
            {apellido}<br/>
            {tipo_usuario}<br/>
            {email}<br/>
        </p>
    }
}