import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, Image, Button, Alert, AppRegistry, TextInput, TouchableHighLight} from 'react-native';
import { List, ListItem,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const fetchURL ='192.168.43.47';

export default class Form_registro extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            rut: "",
            nombre: "",
            apellido: "",
            email: "",
            password:"",
            loginStatus: false,
        };

        this.crearUsuario = this.crearUsuario.bind(this);
    }


    //Crear usuario
    crearUsuario(event) {
        event.preventDefault()
        const { rut, password, nombre, apellido, email, loginStatus} = this.state
        const data = {
            rut : this.state.rut,
            tipo_usuario : 'Cliente',
            password : this.state.password,
            nombre : this.state.nombre,
            apellido : this.state.apellido,
            email : this.state.email
        }

        if (rut && password && nombre && apellido &&email) { 

            fetch('http://'+fetchURL+':5555/usuario/', {
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
                
                <Text style={styles.title}>Registro</Text>
                
                <TextInput  
                style = {styles.input}
                placeholder="11111111-1" 
                value={this.state.rut}
                onChangeText={(rut) => this.setState({rut})}
                />
                <TextInput  
                style = {styles.input}
                placeholder="Nombre" 
                value={this.state.nombre}
                onChangeText={(nombre) => this.setState({nombre})}
                />
                <TextInput  
                style = {styles.input}
                placeholder="Apellido" 
                value={this.state.apellido}
                onChangeText={(apellido) => this.setState({apellido})}
                />
                <TextInput  
                style = {styles.input}
                placeholder="correo@mail.com" 
                value={this.state.email}
                onChangeText={(email) => this.setState({email})}
                />
                <TextInput 
                secureTextEntry={true}
                style = {styles.input}
                placeholder="Contraseña" 
                value={this.state.password}
                onChangeText={(password) => this.setState({password})}
                />

                <Button
                    onPress={this.crearUsuario}
                    title="Registrarse"
                />               
            </View>

        );
    }
    static navigationOptions = {
        drawerLabel: 'Registrarse',
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