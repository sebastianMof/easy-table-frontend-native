import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, Image, Button, Alert} from 'react-native';
import { List, ListItem } from 'react-native-elements'

import {reserva} from './reserva';

const fetchURL ='192.168.43.47';

export default class Reservas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            fecha_inicio_reserva: props.fecha_inicio_reserva,
            fecha_fin_reserva: props.fecha_fin_reserva,
            estado: props.estado,
            mesaNumero: props.mesaNumero,
            usuarioRut: props.usuarioRut,
            reservasLoaded: false,
            reservas: []
        }
        this.loadReservas = this.loadReservas.bind(this);
        this.loadReservasActivas = this.loadReservasActivas.bind(this);

    }

    loadReservas() {

        if(this.state.reservasLoaded === true){
            this.setState({    
                reservasLoaded: false
            });
        }else{
            this.setState({    
                reservasLoaded: true
            });
            fetch('http://'+fetchURL+':5555/reserva/', {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json'
                },})
                .then(response => response.json())
                .then(responseJSON => {
 
                    if (responseJSON.status !== 1) {
                                                  
                            //mensaje de error al cargar reservas del local
                        
                    } else{
                            this.setState({    
                                reservas: responseJSON.data,
                            });
                            //console.log(this.state.reserva[0].numero)      
                            //reservas cargadas
                    }
                })
                .catch(error => {
                    console.log(':(', error);
                })
        }
    }

    loadReservasActivas() {
        if(this.state.reservasLoaded === true){
            this.setState({    
                reservasLoaded: false
            });
        }else{

        this.setState({    
            reservasLoaded: true
        });
        fetch('http://'+fetchURL+':5555/reserva/activas', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },})
            .then(response => response.json())
            .then(responseJSON => {
                if (responseJSON.status !== 1) {
                        //mensaje de error al cargar reservas del local        
                } else{
                        this.setState({    
                            reservas: responseJSON.data,
                        });
                        //console.log(this.state.reservas[0].numero)      
                        //reservas cargadas
                }
            })
            .catch(error => {
                console.log(':(', error);
            })
        }
    }


    render() {
        const {id, fecha_inicio_reserva, fecha_fin_reserva, estado, mesaNumero, usuarioRut, reservasLoaded, reservas} = this.state;
        return (
            <View style={{flex: 1 ,alignItems: 'center',
                justifyContent: 'center'}}>
                
                <Button
                    onPress={ this.loadReservas}
                    title="Ver Reservas"
                />


                <Button
                    onPress={ this.loadReservasActivas}
                    title="Ver Reservas Activas"
                />

                { reservasLoaded ? 
                    this.state.reservas.map((reserva, key)=>(
                     <Text key={key} > 
                        {'\n'}
                        ID: {reserva.id}
                        NUMERO MESA: {reserva.mesaNumero}
                        USUARIO: {reserva.usuarioRut}
                        INICIO: {reserva.fecha_inicio_reserva}
                        FIN: {reserva.fecha_fin_reserva}
                    </Text>
                    ))
                    :
                    null
                }                
            </View>
        );
    }

    static navigationOptions = {
        drawerLabel: 'Reservas',
    };

}