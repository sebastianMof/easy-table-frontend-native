import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, Image, Button, Alert, AppRegistry, TextInput, TouchableHighLight} from 'react-native';
import { List, ListItem,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const fetchURL ='192.168.43.47';

export default class Form_liberar extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            rut: "",
            password: "",
            id: "", //id reserva
            loginError: '',
            url:''
        };

        this.liberarReserva = this.liberarReserva.bind(this);
    }


    //Crear usuario
    liberarReserva(event) {
        event.preventDefault()
        const { rut, password, id} = this.state
        const data = {
            rut : this.state.rut,
            password : this.state.password,
            id : this.state.id
        }

        if (rut && password && id) { 


            fetch('http://'+fetchURL+':5555/reserva/libera', {
                method:'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body : 
                    JSON.stringify(data),

                })
                .then(response => response.json())
                .then(responseJSON => {
                    if (responseJSON.status !== 1) {
                        
                        //mensaje de error al liberar mesa
                    
                     } else{
                        //redireccionar a mensaje de reserva liberada
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
                
                <Text style={styles.title}>Liberar Reserva</Text>
                
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
                placeholder="ID de reserva" 
                value={this.state.id}
                onChangeText={(id) => this.setState({id})}
                />

                <Button
                    onPress={this.liberarReserva}
                    title="Liberar"
                />               
            </View>

        );
    }
    static navigationOptions = {
        drawerLabel: 'Liberar Reserva',
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
