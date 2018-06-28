import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, Image, Button, Alert} from 'react-native';
import { List, ListItem } from 'react-native-elements'

import {mesa} from './mesa';

export default class Mesas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: props.numero,
            capacidad: props.capacidad,
            mesasLoaded: false,
            mesas: []
        }
        this.loadMesas = this.loadMesas.bind(this);
    }

    loadMesas() {

        if(this.state.mesasLoaded === true){
            this.setState({    
            mesasLoaded: false
            });
        }else{
        this.setState({    
            mesasLoaded: true
        });
        fetch('http://192.168.0.6:5555/mesa/', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },})
            .then(response => response.json())
            .then(responseJSON => {
                if (responseJSON.status !== 1) {
                                   
                        //mensaje de error al cargar mesas del local
                    
                } else{
                        this.setState({    
                            mesas: responseJSON.data,
                        });
                        
                        //console.log(this.state.mesas[0].numero)      
                        //mesas cargadas
                }
            })
            .catch(error => {
                console.log(':(', error);
            })
        }
    }

    render() {
        const {numero, capacidad, mesasLoaded, mesas} = this.state;
        return (
            <View style={{flex: 1 ,alignItems: 'center',
                justifyContent: 'center'}}>
                
                <Button
                    onPress={ this.loadMesas}
                    title="Ver Mesas"

                />

                { mesasLoaded ? 
                    this.state.mesas.map((mesa, key)=>(
                     <Text key={key} > 
                        NUMERO { mesa.numero } 
                        Capacidad { mesa.capacidad }
                    </Text>
                    ))
                    :
                    null
                }                
            </View>
        );
    }
}

