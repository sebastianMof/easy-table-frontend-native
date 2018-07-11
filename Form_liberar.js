import React from 'react';
import './App.css';
import urlcodeJson from 'urlcode-json';
import moment from 'moment';


import {BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

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

            console.log(JSON.stringify(data));
            fetch('http://localhost:5555/reserva/libera', {
                method:'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body : 
                    JSON.stringify(data),

                })
                .then(response => response.json())
                .then(responseJSON => {
                    console.log('Respuesta backend', responseJSON);
                   
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
        <div className="Liberar">
            <form method="post">
                <h2> Liberar Reserva
                </h2>
                <br />

                RUT <input type ="text"
                    placeholder="12345678-9" required="required"
                    value={this.state.rut}
                    onChange={e => this.setState({rut: e.target.value})}/>
                <br />
                CONTRASEÑA <input type ="password"
                    placeholder="password" required="required"
                    value={this.state.password}
                    onChange={e => this.setState({password: e.target.value})}/>
                <br />
                ID DE RESERVA <input type ="text"
                    placeholder="7" required="required"
                    value={this.state.id}
                    onChange={e => this.setState({id: e.target.value})}/>
                <br />

                
                <button 
                    href="reserva" 
                    onClick={this.liberarReserva} 
                    className="btn btn-primary btn-block btn-large">Liberar Reserva  
                </button>

            </form>
        </div>
        );
    }
}