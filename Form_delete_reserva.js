import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, Image, Button, Alert, AppRegistry, TextInput, TouchableHighLight} from 'react-native';
import { List, ListItem,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const fetchURL ='192.168.43.47';

export default class Form_login extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            rut: '',
            password:  '',
            id:'',
            loginStatus: false
            
        };

        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

//Iniciarsesion
    onLoginSubmit(event) {
        event.preventDefault()
        const { rut, password , id, loginStatus} = this.state
        
        const data = {
            rut : this.state.rut,
            password : this.state.password,
            id : this.state.id    
        }
       
        if (rut && password) { 
          fetch('http://'+fetchURL+':5555/reserva/delete',{
                method:'DELETE',
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
                    
                     } else{
                        //redireccionar a mensaje de creado
                        this.setState({loginStatus: true});
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
                
                <FormLabel>Borrar Reserva</FormLabel>
                
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
                    onPress={this.onLoginSubmit}
                    title="Borrar Cuenta"
                />               
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        marginVertical:40
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