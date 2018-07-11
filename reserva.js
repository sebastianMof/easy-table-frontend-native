import React, {Component} from 'react';

export class reserva extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            fecha_inicio_reserva: props.fecha_inicio_reserva,
            fecha_fin_reserva: props.fecha_fin_reserva,
            estado: props.estado,
            numeroMesa:props.mesaNumero,
            usuarioRut:props.usuarioRut
        }
    }

    render() {
        const {id, fecha_inicio_reserva, fecha_fin_reserva, estado, mesaNumero, usuarioRut} = this.state;
        return <p>
            {id}<br/>
            {fecha_inicio_reserva}<br/>
            {fecha_fin_reserva}<br/>
            {estado}<br/>
            {mesaNumero}<br/>
            {usuarioRut}<br/>
        </p>
    }
}

