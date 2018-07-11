import React from 'react';
import './App.css';
import urlcodeJson from 'urlcode-json';


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

            console.log(JSON.stringify(data));
            fetch('http://localhost:5555/mesa/', {
                method:'POST',
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
        <div className="Reservar">
            <form method="post">
                <h2> Crear Mesa
                </h2>
                <br />
                RUT <input type ="text"
                    placeholder="12345678-9" required="required"
                    value={this.state.rut}
                    onChange={e => this.setState({rut: e.target.value})}/>
                <br />
                CONTRASEÑA <input type="password"
                    placeholder="password" required="required"
                    value={this.state.password}
                    onChange={e => this.setState({password: e.target.value})}/>
                <br /> 
                NUMERO DE MESA <input type ="text"
                    placeholder="6" required="required"
                    value={this.state.numero}
                    onChange={e => this.setState({numero: e.target.value})}/>
                <br />
                CAPACIDAD <input type ="text"
                    placeholder="6" required="required"
                    value={this.state.capacidad}
                    onChange={e => this.setState({capacidad: e.target.value})}/>
                <br />

                <button 
                    href="mesa" 
                    onClick={this.crearMesa} 
                    className="btn btn-primary btn-block btn-large">Crear Mesa 
                </button>

            </form>
        </div>
        );
    }
}