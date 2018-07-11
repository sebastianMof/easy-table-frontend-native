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
                <View style={styles.container}>

                    <Form_reserva_numero />
                    <Reservas />
                    <Mesas />
                    
                
                 </View>
             </ScrollView>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',  
        marginBottom: 20,
        marginVertical:20,
        paddingLeft:15,
        paddingRight:15
    },
});
