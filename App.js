import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Alert} from 'react-native';

import Mesas from './Mesas.js';
import example from './example.js'

export default class App extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={{flex: 1 , alignItems: 'center',
                    justifyContent: 'center'}}>

                    
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
        alignItems: 'center',
        justifyContent: 'center',
    },
});
