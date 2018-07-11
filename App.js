import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Alert} from 'react-native';

import Mesas from './Mesas.js';
import Reservas from './Reservas.js';
import Usuarios from './Usuarios.js';

import Form_reserva_numero from './Form_reserva_numero.js';


export default class App extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={{flex: 1 , 
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical:50}}>

                    <Form_reserva_numero />
                    
                
                 </View>
             </ScrollView>
        );
      }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
