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
            tipo_usuario:'',
            loginStatus: false, 
        };

        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

//Iniciarsesion
    onLoginSubmit(event) {
        event.preventDefault()
        const { rut, password , loginStatus} = this.state
        var str_1 = { 
            "rut" : this.state.rut , 
            "password" : this.state.password 
            };
       
        if (rut && password) { 
          fetch('http://'+fetchURL+':5555/usuario/login?' + 'rut='+str_1.rut+'&'+'password='+str_1.password ,{
                method:'GET',
                headers: {
                    'Content-Type': 'application/json'
                },

            })
            .then(response => response.json())
            .then(responseJSON => {
                if (responseJSON.status !== 1) {
                    responseJSON.data
                    console.log('Revisar datos');
                 } else{
               
                    this.setState({    
                        loginStatus: true,
                        tipo_usuario: responseJSON.data.tipo_usuario
                    });
                    

                 }  
            }).catch(e =>{
              console.log('catch',e);
            })
        }
    }

    render(){
        const {tipo_usuario, loginStatus} = this.state;
        return(
            <View style={styles.container}>

                {loginStatus ?

                    <View>
                        <Text style={styles.iniciada}>
                        Sesión Iniciada como {this.state.tipo_usuario}
                        </Text>
                    </View>

                    :
                    <View>
                        <Text style = {styles.title} >Iniciar sesión</Text>
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
                        <Button
                            onPress={this.onLoginSubmit}
                            title="Iniciar"
                        />  
                    </View>    
                }
            </View>  

        );
    }

    static navigationOptions = {
        drawerLabel: 'Login',
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
    iniciada:{
        paddingLeft:80,
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