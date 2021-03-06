import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, Image, Button, Alert, AppRegistry, TextInput, TouchableHighLight} from 'react-native';
import { List, ListItem,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';


const fetchURL ='192.168.43.47';


export default class Form_reserva_numero extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            rut: "",
            fecha_inicio_reserva: "",
            fecha_fin_reserva:"",
            mesa: "",
            capacidad:"",
            hora_inicio_reserva:"",
            hora_fin_reserva:""
        };

        this.crearReserva = this.crearReserva.bind(this);
    }


    //Crear usuario
    crearReserva(event) {
        event.preventDefault()
        const { rut, fecha_inicio_reserva, fecha_fin_reserva, capacidad, hora_fin_reserva, hora_inicio_reserva} = this.state
        const data = {
            rut : this.state.rut,
            fecha_inicio_reserva : this.state.fecha_inicio_reserva,
            fecha_fin_reserva : this.state.fecha_fin_reserva,
            hora_inicio_reserva : this.state.hora_inicio_reserva,
            hora_fin_reserva : this.state.hora_fin_reserva,
            mesa : '',
            capacidad: this.state.capacidad
            
            
        }

        if (rut && fecha_inicio_reserva && fecha_fin_reserva &&hora_inicio_reserva&&hora_fin_reserva && capacidad) { 

            fetch('http://'+fetchURL+':5555/reserva/', {
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
                
                <Text style={styles.titleReserva}>Reserva por capacidad</Text>
                
                <TextInput  
                style = {styles.input}
                placeholder="11111111-1" 
                value={this.state.rut}
                onChangeText={(rut) => this.setState({rut})}
                />

                <TextInput  
                style = {styles.input}
                placeholder="Capacidad" 
                value={this.state.capacidad}
                onChangeText={(capacidad) => this.setState({capacidad})}
                />
                
                <DatePicker
                    style={styles.dateInput}
                    date={this.state.fecha_inicio_reserva}
                    mode="date"
                    placeholder="Fecha inicio reserva"
                    format="YYYY-MM-DD"
                    minDate="2018-06-01"
                    maxDate="2019-06-01"
                    confirmBtnText="Confirmar"
                    cancelBtnText="Cancelar"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(fecha_inicio_reserva) => {this.setState({fecha_inicio_reserva})}}
                />

                <DatePicker
                    style={styles.dateInput}
                    date={this.state.fecha_fin_reserva}
                    mode="date"
                    placeholder="Fecha fin reserva"
                    format="YYYY-MM-DD"
                    minDate="2018-06-01"
                    maxDate="2019-06-01"
                    confirmBtnText="Confirmar"
                    cancelBtnText="Cancelar"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(fecha_fin_reserva) => {this.setState({fecha_fin_reserva})}}
                />

                <DatePicker
                    style={styles.dateInput}
                    date={this.state.hora_inicio_reserva}
                    mode="time"
                    placeholder="Hora inicio reserva"
                    format="HH:mm"
                    confirmBtnText="Confirmar"
                    cancelBtnText="Cancelar"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(hora_inicio_reserva) => {this.setState({hora_inicio_reserva})}}
                />

                <DatePicker
                    style={styles.dateInput}
                    date={this.state.hora_fin_reserva}
                    mode="time"
                    placeholder="Hora fin reserva"
                    format="HH:mm"
                    confirmBtnText="Confirmar"
                    cancelBtnText="Cancelar"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(hora_fin_reserva) => {this.setState({hora_fin_reserva})}}
                />

                <Button
                    onPress={this.crearReserva}
                    title="crear Reserva"
                />               
            </View>

        );
    }
    static navigationOptions = {
        drawerLabel: 'Reserva por capacidad',
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
    titleReserva:{
        paddingLeft:90,
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
    },
    dateInput:{
        width: 330,
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 20,
    }
});