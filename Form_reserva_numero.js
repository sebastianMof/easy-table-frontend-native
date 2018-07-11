import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, Image, Button, Alert} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';


const fetchURL ='192.168.0.6';


export default class Form_reserva_numero extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            rut: "",
            fecha_inicio_reserva: "",
            fecha_fin_reserva:"",
            mesa: "",
            capacidad:"",
            hora_inicio_reserva:"",
            hora_fin_reserva:""
        };

        this.crearReserva = this.crearReserva.bind(this);
    }


    //Crear usuario
    crearReserva(event) {
        event.preventDefault()
        const { rut, fecha_inicio_reserva, fecha_fin_reserva, mesa, hora_fin_reserva, hora_inicio_reserva} = this.state
        const data = {
            rut : this.state.rut,
            fecha_inicio_reserva : this.state.fecha_inicio_reserva,
            fecha_fin_reserva : this.state.fecha_fin_reserva,
            hora_inicio_reserva : this.state.hora_inicio_reserva,
            hora_fin_reserva : this.state.hora_fin_reserva,
            mesa : this.state.mesa,
            capacidad:''
        }

        if (rut && fecha_inicio_reserva && fecha_fin_reserva &&hora_inicio_reserva&&hora_fin_reserva && mesa) { 

            console.log(JSON.stringify(data));
            fetch('http://'+fetchURL+':5555/reserva/', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body : 
                    JSON.stringify(data),

                })
                .then(response => response.json())
                .then(responseJSON => {
                    if (responseJSON.status !== 1) {
                        console.log('OHMYGOOOD');
                        //mensaje de no disponibilidad
                     } else{
                        //redireccionar a mensaje de creado
                        console.log(':D');      
                     }
                  
                }).catch(e =>{
                  console.log(e);
                })
        }
    }

    render(){
        return(
            <View style={{flex: 1 ,alignItems: 'center',
                justifyContent: 'center'}}>
                
                <FormLabel>NUMERO DE MESA</FormLabel>
                <FormInput onChangeText={e => this.setState({mesa: e.target.value})}/>
                <FormValidationMessage>{'Campo requerido'}</FormValidationMessage>
              

                <Button
                    onPress={ this.crearReserva}
                    title="crear Reserva"
                />               
            </View>

        );
    }
}