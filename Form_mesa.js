import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, Image, Button, Alert, AppRegistry, TextInput, TouchableHighLight} from 'react-native';
import { List, ListItem,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const fetchURL ='192.168.43.47';

export default class Form_mesa extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            rut: "",
            password: "",
            numero: "",
            capacidad: ""
        };

        this.crearMesa = this.crearMesa.bind(this);
    }


    //Crear usuario
    crearMesa(event) {
        event.preventDefault()
        const { rut, password, numero, capacidad} = this.state
        const data = {
            rut : this.state.rut,
            password: this.state.password,
            numero: this.state.numero,
            capacidad: this.state.capacidad
        }

        if (rut && password && numero && capacidad) { 

            fetch('http://'+fetchURL+':5555/mesa/', {
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
            <View style={styles.container}>
                
                <Text style={styles.title}>Crear Mesa</Text>
                
                <TextInput  
                style = {styles.input}
                placeholder="11111111-1" 
                value={this.state.rut}
                onChangeText={(rut) => this.setState({rut})}
                />
                <TextInput 
                secureTextEntry={true}
                style = {styles.input}
                placeholder="Contraseña" 
                value={this.state.password}
                onChangeText={(password) => this.setState({password})}
                />
                <TextInput  
                style = {styles.input}
                placeholder="Número de mesa" 
                value={this.state.numero}
                onChangeText={(numero) => this.setState({numero})}
                />
                <TextInput  
                style = {styles.input}
                placeholder="Capacidad" 
                value={this.state.capacidad}
                onChangeText={(capacidad) => this.setState({capacidad})}
                />

                <Button
                    onPress={this.crearMesa}
                    title="Crear Mesa"
                />               
            </View>

        );
    }
    static navigationOptions = {
        drawerLabel: 'Añadir Mesa',
    };
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        marginVertical:40,
        paddingLeft:15,
        paddingRight:15
    },
    title:{
        paddingLeft:125,
        marginBottom: 20,
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 2,
        marginBottom: 20,
        paddingLeft:15,
        paddingRight:15
    }
});