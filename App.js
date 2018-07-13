import React, { Component } from 'react';
import { DrawrNavigator ,StyleSheet, Text, View, ScrollView, Button, Image} from 'react-native';
import { Container, Content, Icon, Header, Body } from 'native-base'
import { createDrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

//data
import Mesas from './Mesas.js';
import Reservas from './Reservas.js';
import Usuarios from './Usuarios.js';
//forms
import Form_reserva_numero from './Form_reserva_numero.js';
import Form_reserva_capacidad from './Form_reserva_capacidad.js';
import Form_registro from './Form_registro.js';
import Form_mesa from './Form_mesa.js';
import Form_login from './Form_login.js';
import Form_liberar from './Form_liberar.js';
import Form_delete_user from './Form_delete_user';
import Form_delete_reserva from './Form_delete_reserva';
import Form_delete_mesa from './Form_delete_mesa';


export default class App extends React.Component {
    render() {
        return (
            <RootDrawer />
        );
    }

}

const RootDrawer = createDrawerNavigator(
  {
    Login: Form_login,
    Registro: Form_registro,
    Usuarios: Usuarios,
    BorrarCuenta: Form_delete_user,

    Mesas: Mesas,
    AñadirMesa: Form_mesa,
    BorrarMesa: Form_delete_mesa,

    VerReservas: Reservas,
    ReservarPorMesa: Form_reserva_numero,
    ReservarPorCapacidad: Form_reserva_capacidad,
    LiberarReserva: Form_liberar,
    BorrarReserva: Form_delete_reserva,
  },
  {
    initialRouteName: 'Login',
    title: 'Main',
    drawerPosition: 'left',

  }
);

const styles = StyleSheet.create({
    drawerHeader: {
        height: 200,
        backgroundColor: 'white'
    },
    drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75
    }
});