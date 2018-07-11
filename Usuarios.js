import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, Image, Button, Alert} from 'react-native';
import { List, ListItem } from 'react-native-elements'

import {usuario} from './usuario';

const fetchURL ='192.168.0.6';

export default class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rut: props.rut,
            password: props.password,
            nombre: props.nombre,
            apellido: props.apellido,
            email: props.email,
            tipo_usuario: props.tipo_usuario,
            usuariosLoaded: false,
            usuarios: []
        }
        this.loadUsuarios = this.loadUsuarios.bind(this);
    }

    loadUsuarios() {
        if (this.state.usuariosLoaded === true){
            this.setState({    
                usuariosLoaded: false
            });
        }else{
            this.setState({    
                usuariosLoaded: true
            });
        
            fetch('http://'+fetchURL+':5555/usuario/', {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json'
                },})
                .then(response => response.json())
                .then(responseJSON => {
                    console.log('Respuesta backend', responseJSON);
                    
                    if (responseJSON.status !== 1) {                    
                            //mensaje de error al cargar usuarios
                        
                    } else{
                            this.setState({    
                                usuarios: responseJSON.data,
                            });
                            //console.log(this.state.usuarios[0].numero)      
                            //usuarios cargados
                    }
                })
                .catch(error => {
                    console.log(':(', error);
                })
        }
    }

    render() {
        const {rut, password, nombre, apellido, email, tipo_usuario, usuariosLoaded, usuarios} = this.state;
        return (
             <View style={{flex: 1 ,alignItems: 'center',
                justifyContent: 'center'}}>
                
                <Button
                    onPress={ this.loadUsuarios}
                    title="Ver Usuarios"
                />


                { usuariosLoaded ? 
                    this.state.usuarios.map((usuario, key)=>(
                     <Text key={key} > 
                        RUT: {usuario.rut} 
                        NOMBRE: {usuario.nombre} 
                        APELLIDO: {usuario.apellido} 
                        EMAIL: {usuario.email} 
                        TIPO: {usuario.tipo_usuario}
                    </Text>
                    ))
                    :
                    null
                }                
            </View>




        );
    }
}